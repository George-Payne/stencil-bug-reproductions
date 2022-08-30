import { Component, h, State } from '@stencil/core';

let i = 0;
const nextKey = () => `key-${i++}`;

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @State() currentKey: string = nextKey();

  componentDidLoad() {
    setInterval(() => {
      this.currentKey = nextKey();
    }, 3_000);
  }

  render() {
    return (
      <div ref={this.captureDiv} key={this.currentKey}>
        {this.currentKey}
      </div>
    );
  }

  private captureDiv = (r: HTMLDivElement | null) => {
    console.log(this.currentKey, r);
  };
}
