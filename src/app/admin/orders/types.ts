import { createClient } from '@/utils/supabase/server';
import { QueryData } from '@supabase/supabase-js';

const supabase = await createClient();

export const ordersWithProductsQuery = supabase
  .from('order')
  .select('*, order_items:order_item(*, product(*)), user(*)')
  .order('created_at', { ascending: false })
  .limit(100); 

export type OrdersWithProducts = QueryData<typeof ordersWithProductsQuery>;
