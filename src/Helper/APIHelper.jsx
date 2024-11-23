import AxiosInstance from './AxiosInstance';

//*đăng ký tài khoản
const register = async data => {
  try {
    const {email, password, name} = data;
    const body = {
      email: email,
      password: password,
      name: name,
    };
    const response = await AxiosInstance().post('/register.php', body);
    if (response.status === true) {
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
    const response = await AxiosInstance().post('/login.php', body);
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
    const response = await AxiosInstance().get('list-category.php');
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
      `list-product-by-cate.php?id=${idCate}`,
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
