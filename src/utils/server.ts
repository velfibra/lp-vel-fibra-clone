import axios from 'axios';
import { createPool } from "@vercel/postgres";;

const client = createPool({
    connectionString: "postgres://default:hdl5rvQJ3Woe@ep-shrill-feather-56119370-pooler.us-east-1.postgres.vercel-storage.com/verceldb"
})

export async function getIndex() {
  const sellerIndex = await client.sql`SELECT * FROM seller_index;`;
  const response = sellerIndex.rows
  const index = response[0].index
  return index
}


type personData = {
  name: string;
  cpf?: string;
  indicateName?: string,
  email?: string;
  phone: string;
};

type dealData = {
  title: string;
  value: string;
  person_id: any;
  pipeline_id: number;
  visible_to: number;
  user_id?: any;
  '489d1f8ec764001bc871ac69de95ddd24256fe68'?: string;
}; 

const sellersIds = [13367036, 13323641, 13323586, 13458237, 13323630, 13359820, 13027576, 13323597, 13653399, 13443343];

const getSellerIndex = async () => {
    const index = await getIndex();
    const sellerIndex = index;
    return sellerIndex;
}


const selectNextSeller = async () => {
  const sellerIndex = await getSellerIndex()
  let currentSellerIndex = sellerIndex
  const selectedSellerId = sellersIds[currentSellerIndex];
  currentSellerIndex   = (currentSellerIndex + 1) % sellersIds.length;
  return selectedSellerId;
};


const fetchEmail = async (email: string) => {
  try {
    const response = await axios.get('https://api.pipedrive.com/v1/persons/search', {
      params: {
        term: email,
        api_token: '222f88de28024b4e36d1328030212ae6079389f4',
        fields: 'email',
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const items = await response.data.data.items[0].item.primary_email;
    const foundEmail = items === email;
    return !!foundEmail; 
  } catch (error) {
    return false;
  }
};

const postPerson = async (data: personData) => {
   try {
    const createPersonResponse = await axios.post('https://api.pipedrive.com/v1/persons', data, {
      params: {
        api_token: '222f88de28024b4e36d1328030212ae6079389f4',
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    return createPersonResponse.data.data.id;
  } catch (error) {
    console.error(error);
    return false;
  }
};
const postDeal = async (data: dealData) => {
    const selectedSellerId = await selectNextSeller();
    data.user_id = selectedSellerId;
  
    try {
      await axios.post('https://api.pipedrive.com/v1/deals', data, {
        params: {
          api_token: '222f88de28024b4e36d1328030212ae6079389f4',
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      await incrementSellerIndex();
    } catch (error) {
      console.error('Erro ao criar negócio:', error);
    }
};

const incrementSellerIndex = async () => {
    try {
        const sellerIndex = await getIndex();
        const newIndex = (sellerIndex + 1) % sellersIds.length;
        const updateUrl = `https://lp.clickspeed.net.br//api/get-seller_index?newIndex=${newIndex}`;
        await axios.get(updateUrl);
    } catch (error) {
        console.error('Erro ao atualizar o índice do vendedor:', error);
    }
};
export { fetchEmail, postPerson, postDeal };
