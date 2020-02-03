import { observable, action} from 'mobx';
import { ResultList } from 'models/resultList';

class AppStore {
  @observable value = '';
  @observable result = '';
  @observable toggleView = false;
  @observable resultList: ResultList[] = [];

  @action
  setValue(value: string) {
    this.value = value;
    console.log('++++++++++++++++++++++++++++++++++++++++++')
    console.log('setValue#')
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
  }

  @action
  errorResult(err: string) {
    this.result = err;
  }

  @action
  setResultList(resultList: ResultList[]) {
    this.resultList = resultList;
  }

  @action.bound
  addResultInList(){
    let resultList = this.resultList;

    resultList.push({
      id: Date.now().toString(),
      serialNumber: this.value,
      result: this.result,
    })

    this.setResultList(resultList);
    this.clearResult();
    this.setToggleView(false);
    console.log('++++++++++++++++++++++++++++++++++++++++++')
    console.log('addResultInList#')
    console.log('this.value: ' + this.value);
    console.log('this.result: ' + this.result);
    console.log('typeof this.setValue: ' + typeof this.setValue);
    console.log('typeof this.addResultInList: ' + typeof this.addResultInList)
    console.log('------------------------------------------')
  }

  @action.bound
  clearResult() {
    this.value = '';
  }

  @action.bound
  setToggleView(j: boolean) {
    this.toggleView = j;
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
      this.setToggleView(true);
    } else {
      this.errorResult('enter the number and try again');
    };
    console.log('++++++++++++++++++++++++++++++++++++++++++')
    console.log('calculationNumberFibonacci#')
    console.log('this.value: ' + this.value);
    console.log('this.result: ' + this.result);
    console.log('typeof this.setValue: ' + typeof this.setValue);
    console.log('typeof this.calculationNumberFibonacci: ' + typeof this.calculationNumberFibonacci)
    console.log('------------------------------------------')
  }
}

export const appStore = new AppStore();
