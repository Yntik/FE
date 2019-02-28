import {Injectable, AfterViewChecked} from '@angular/core';
import {reject} from 'q';
import {version} from 'punycode';

declare let paypal: any;

@Injectable()

export class PaypalapiService implements AfterViewChecked {
    addScript: boolean = false;

    finalAmount: number;
    customId: number;

    paypalConfig = {
        env: 'sandbox',
        client: {
            sandbox: 'Adr6A_xRMrDnvbJ9Bvu20s0uDNODmFFj_LKtuP4ar343E7buS6u4aLQzxvZbFJTdlKRHIXkKnA2qJvkW',
            production: '<your-production-key here>'
        },
        commit: true,
        payment: (data, actions) => {
            return actions.payment.create({
                payment: {
                    transactions: [
                        {
                            amount: {total: this.finalAmount, currency: 'USD'},
                            custom: this.customId
                        }
                    ]
                }
            });
        },
        onAuthorize: (data, actions) => {
            return actions.payment.execute().then((payment) => {
                //Do something when payment is successful
            });
        }
    };

    ngAfterViewChecked(): void {
        if (!this.addScript) {
            this.addPaypalScript().then(() => {
                paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
            });
        }
    }

    addPaypalScript() {
        this.addScript = true;
        return new Promise((resolve, reject) => {
            let scripttagElement = document.createElement('script');
            scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
            scripttagElement.onload = resolve;
            document.body.appendChild(scripttagElement);
            console.log('new tree init');
        });
    }
}