import { observable, action } from 'mobx';

class AppStore {
  @observable value = '';
  @observable result = '';

  @action
  setValue(value: string) {
    this.value = value;
    console.log('++++++++++++++++++++++++++++++++++++++++++')
    console.log('setValue')
    console.log('value: ' + value);
    console.log('typeof this.setValue: ' + typeof this.setValue);
    console.log('this.value: ' + this.value);
    console.log('this.result: ' + this.result);
    console.log('typeof this.calculationNumberFibonacci: ' + typeof this.calculationNumberFibonacci)
    console.log('------------------------------------------')
  }

  @action
  setResult(result: string) {
    this.result = result;
    console.log(this.result)
    console.log(typeof this.setResult)
  }

  @action
  errorResult(err: string) {
    this.result = err;
  }

  @action
  clearResult() {
    this.result = '';
  }

  @action.bound
  calculationNumberFibonacci() {
    if (this.value.trim()) {
      const serialNumber = Number(this.value);
      let next = 1;
      let prev = 0;
      for(let i = 0; i < serialNumber; i++) {
        next = next + prev;
        prev = next - prev;
      };
      const result = String(prev)
      this.setResult(result);
      console.log(result)
      setTimeout(this.clearResult, 2000) ;
    } else {
      this.errorResult('enter the number and try again');
      setTimeout(this.clearResult, 2000);
    };
    /*console.log('++++++++++++++++++++++++++++++++++++++++++')
    console.log('calculationNumberFibonacci')
    console.log('this.value: ' + this.value);
    console.log('this.result: ' + this.result);
    console.log('typeof this.setValue: ' + typeof this.setValue);
    console.log('typeof this.calculationNumberFibonacci: ' + typeof this.calculationNumberFibonacci)
    console.log('------------------------------------------')*/
  }
}

export const appStore = new AppStore();
