  function converterController($scope, currServ, constantValues) {
    'ngIngect';
    this.countValue = null;
    this.costValue = null;
    this.currency = currServ.loadCache();
    this.currencyGiven = constantValues.currency[0];
    this.currencyReceiven = constantValues.currency[1];

    this.changeValues = () => {
      [this.countValue, this.costValue] = [this.costValue, this.countValue];
      [this.currencyGiven, this.currencyReceiven] = [this.currencyReceiven, this.currencyGiven];
    };

    this.convertValue = () => {
      const res = currServ.convertTo(this.countValue, this.currencyGiven.buy);
      this.costValue = currServ.convertFrom(res, this.currencyReceiven.sale);
    };

    $scope.$watch('ng.currencyGiven', () => {
      this.convertValue();
    });

    $scope.$watch('ng.currencyReceiven', () => {
      this.convertValue();
    });

    $scope.$watch('ng.countValue', () => {
      this.convertValue();
    });
  }

  export default converterController;