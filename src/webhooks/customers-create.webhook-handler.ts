import {
  ShopifyWebhookHandler,
  WebhookHandler,
} from '@nestjs-shopify/webhooks';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@WebhookHandler('customers/create')
export class CustomersCreateWebhookHandler extends ShopifyWebhookHandler {
  async handle(shop: string, customer: Customer): Promise<void> {
    console.log('CUSTOMER DATA', customer);
    const user = await prisma.user.create({
      data: {
        email: customer.email,
        firstName: customer.first_name,
        lastName: customer.last_name,
      },
    });
    console.log('USER CREATED: ', user);
  }
}

type Address = {
  id: number;
  customer_id: number;
  first_name: string;
  last_name: string;
  company: string;
  address1: string;
  address2: string;
  city: string;
  province: string;
  country: string;
  zip: string;
  phone: string;
  name: string;
  province_code: null | string;
  country_code: string;
  country_name: string;
  default: boolean;
};

type Customer = {
  id: number;
  email: null | string;
  accepts_marketing: boolean;
  created_at: string;
  updated_at: string;
  first_name: string;
  last_name: string;
  orders_count: number;
  state: string;
  total_spent: string;
  last_order_id: null | number;
  note: string;
  verified_email: boolean;
  multipass_identifier: null | string;
  tax_exempt: boolean;
  tags: string;
  last_order_name: null | string;
  currency: string;
  phone: null | string;
  addresses: Address[];
  accepts_marketing_updated_at: string;
  marketing_opt_in_level: null | string;
  tax_exemptions: any[];
  email_marketing_consent: null | boolean;
  sms_marketing_consent: null | boolean;
  admin_graphql_api_id: string;
  default_address: Address;
};
