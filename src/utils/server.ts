import axios from 'axios';

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
    return !!foundEmail; // Retorna true se o email existir, caso contrário, retorna false
  } catch (error) {
    console.error('Erro ao buscar email:', error);
    return false;
  }
};

type personData = {
  name: string;
  email: string;
  phone: string;
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

export { fetchEmail, postPerson };
