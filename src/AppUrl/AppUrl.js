class UrlApp {
    static BaseApi = "http://127.0.0.1:8000/api";
  
    
    //static products= this.BaseApi + "/products";
    static categories= this.BaseApi +"/categories";
    static register= this.BaseApi +"/register";
   // static subcategoriesbyids= this.BaseApi +"/subCategory/{id}";
    static subcategoriesbyids = `${this.BaseApi}/subCategory/{id}`;
    static products = `${this.BaseApi}/products`;
    
    
        
    

}

export default UrlApp;