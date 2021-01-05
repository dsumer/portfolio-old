import { makeAutoObservable } from 'mobx';

class TodoStore {
  email = '';
  error = false;
  errorMessage = '';
  state: 'initial' | 'submitting' | 'success' = 'initial';

  constructor() {
    makeAutoObservable(this);
  }

  changeEmail(value: string) {
    this.email = value;
  }

  async submit() {
    if (this.state !== 'initial') {
      return;
    }

    this.error = false;
    this.errorMessage = '';
    this.state = 'submitting';

    try {
      const response = await (
        await fetch('https://api.convertkit.com/v3/forms/1930765/subscribe', {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            // eslint-disable-next-line @typescript-eslint/camelcase
            api_key: '88GUqlrHzXUlYl4dnZL3FA',
            email: this.email,
          }),
        })
      ).json();
      if (response.error) {
        this.errorMessage = response.message;
        throw {};
      }
      this.state = 'success';
    } catch {
      this.error = true;
      this.state = 'initial';
    }
  }
}

const todoStore = new TodoStore();

export default todoStore;
