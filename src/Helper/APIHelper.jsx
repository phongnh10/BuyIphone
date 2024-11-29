import AxiosInstance from './AxiosInstance';

//*đăng ký tài khoản
const register = async data => {
  try {
    const {name, email, password} = data;
    const body = {
      name: name,
      email: email,
      password: password,
    };
    const response = await AxiosInstance().post('user/register', body);
    if (response.user) {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
  return false;
};

//*đăng nhập
const login = async data => {
  try {
    const {email, password} = data;
    const body = {
      email: email,
      password: password,
    };
    const response = await AxiosInstance().post('user/login', body);
    if (response.status) {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
  return false;
};

//*Danh mục SP
const allCategories = async () => {
  try {
    const response = await AxiosInstance().get('category');
    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
  return [];
};

//* All sản phẩm theo danh mục
const allProductByCategory = async idCate => {
  try {
    const response = await AxiosInstance().get(
      `list-product-by-cate.php/${idCate}`,
    );
    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
  return [];
};

export {register, login, allCategories, allProductByCategory};
