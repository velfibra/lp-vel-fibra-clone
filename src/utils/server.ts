import axios from 'axios';

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


const currentSellerIndex = process.env.CURRENT_SELLER_INDEX ? parseInt(process.env.CURRENT_SELLER_INDEX) : 0;

const selectNextSeller = () => {
  const selectedSellerId = sellersIds[currentSellerIndex];
  const nextSellerIndex = (currentSellerIndex + 1) % sellersIds.length;
  return { selectedSellerId, nextSellerIndex };
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
    const selectedSellerId = selectNextSeller();
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
    } catch (error) {
      console.error('Erro ao criar negócio:', error);
    }
};

export { fetchEmail, postPerson, postDeal };
