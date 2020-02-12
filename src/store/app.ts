import { observable, action, IReactionDisposer, reaction} from 'mobx';
import { Result } from 'models/app';

class AppStore {
  @observable value = '';
  @observable result = '';
  @observable toggleView = false;
  @observable resultList: Result[] = [];
  private disposer: IReactionDisposer | undefined;
  private timerId: number | undefined;

  constructor() {
    this.disposer = reaction(
      () => this.result,
      result => {
        clearTimeout(this.timerId);
        if (result.length > 0) {
          this.timerId = setTimeout(
            this.addResultInList, 2000
          );
        }
      }
    );
  }

  @action
  setValue(value: string) {
    this.value = value;
    /*console.log('++++++++++++++++++++++++++++++++++++++++++')
    console.log('setValue#')
    console.log('value: ' + value);
    console.log('typeof this.setValue: ' + typeof this.setValue);
    console.log('this.value: ' + this.value);
    console.log('this.result: ' + this.result);
    console.log('typeof this.calculationNumberFibonacci: ' + typeof this.calculationNumberFibonacci)
    console.log('------------------------------------------')*/
  }

  @action
  setResult(result: string) {
    this.result = result;
  }

  /*@action
  errorResult(err: string) {
    this.result = err;
  }*/

  @action
  setResultList(resultList: Result[]) {
    this.resultList = resultList;
  }

  @action.bound
  addResultInList(){
    let resultList = this.resultList;

    resultList.unshift({
      id: Date.now().toString(),
      serialNumber: this.value,
      result: this.result,
    })

    this.setResultList(resultList);
    this.clearResult();
    this.setToggleView(false);
    /*console.log('++++++++++++++++++++++++++++++++++++++++++')
    console.log('addResultInList#')
    console.log('this.value: ' + this.value);
    console.log('this.result: ' + this.result);
    console.log('typeof this.setValue: ' + typeof this.setValue);
    console.log('typeof this.addResultInList: ' + typeof this.addResultInList)
    console.log('------------------------------------------')*/
  }

  @action.bound
  deleteResult(id: string) {
    this.setResultList(this.resultList.filter(item => item.id !== id));
  }

  @action
  clearResult() {
    this.value = '';
    this.result = '';
  }

  @action
  setToggleView(mode: boolean) {
    this.toggleView = mode;
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
      null;
    };
    /*console.log('++++++++++++++++++++++++++++++++++++++++++')
    console.log('calculationNumberFibonacci#')
    console.log('this.value: ' + this.value);
    console.log('this.result: ' + this.result);
    console.log('typeof this.setValue: ' + typeof this.setValue);
    console.log('typeof this.calculationNumberFibonacci: ' + typeof this.calculationNumberFibonacci)
    console.log('------------------------------------------')*/
  }

  public dispose(): void {
    this.disposer && this.disposer();
  }

}

export const appStore = new AppStore();
