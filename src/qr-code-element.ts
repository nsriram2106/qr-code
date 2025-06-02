import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('qr-code-element')
export class QRCodeElement extends LitElement {
  static styles = css`
    .qr-container {
      padding: 1rem;
      border: 1px solid #ccc;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    input {
      padding: 0.5rem;
      font-size: 1rem;
    }
  `;

  @property({ type: String })
  text: string = '';

  render() {
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(this.text)}&size=150x150`;

    return html`
      <div class="qr-container">
        <input
          type="text"
          .value=${this.text}
          @input=${(e: Event) => {
            const input = e.target as HTMLInputElement;
            this.text = input.value;
          }}
          placeholder="Enter text or URL..."
        />
        <img src="${qrUrl}" alt="QR Code" />
      </div>
    `;
  }
}
