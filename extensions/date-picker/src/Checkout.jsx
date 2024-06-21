
// import react, {useState} from 'react';
import {
  reactExtension,
  DatePicker,
  useApplyMetafieldsChange,
  useMetafield
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {

  const deliveryDate = useMetafield({
    namespace: "details",
    key: "date"
  });


  const setDeliveryDate = useApplyMetafieldsChange()



  return (
    <DatePicker
      selected={deliveryDate?.value}
      onChange={(value) => {
        setDeliveryDate({
          type: "updateCartMetafield",
          namespace: "details",
          key: "date",
          valueType: "string",
          value,
        });
      }}
    />

  );
}