export default function (app) {

  app.provider('currServ', currServ);
  function currServ(){
    let API = '';
  
    return {
      setAPI: apiURL => (API = apiURL),
      list: [],
      $get: ['$http', function($http) {
        return {
          loadCache: () => {
            $http.get(API)
              .then(({ data }) => {
                data.forEach(item => this.list.push(item));
                this.list.push({ ccy: 'UAH', buy: '1', sale: '1' });
              });
            return this.list;
          },
          convertTo(startVal, endVal) {
            let result = 0;
            result = startVal * endVal;
            return result;
          },
  
          convertFrom(startVal, endVal) {
            let result = 0;
            result = startVal / endVal;
            return result;
          }
        };
      }]
    };
  }
}

