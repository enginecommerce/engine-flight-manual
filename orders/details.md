---
layout: tabs
title: Details Page
parent: Orders
has_children: false
permalink: orders/details/
tabs:
  - name: Shipments
  - name: Cart
    toc: true
    toc_header: On this tab
    context:
      - title: Open the Cart tab of an Order
        steps:

        - instruction: Go the Orders Homepage
          image: /assets/images/mockdown/draft2/orders/orders_home_out_orders_title.jpg

        - instruction: Locate the Orders List to the left of the page and select an order
          image: /assets/images/mockdown/draft2/orders/order_home_orders_list.jpg

        - instruction: The right side of the page will open the overview information of the Order
          image: /assets/images/mockdown/draft2/orders/order_home_orders_overview_dark.jpg

        - instruction: Click Details to open the details page of the order
          image: /assets/images/mockdown/draft2/orders/order_home_orders_details_button_dark.jpg

      - title: Add an Item to an Order
        steps:

        - instruction: Open the Cart tab in the Details page of the order
          image: /assets/images/mockdown/draft2/orders/orders_new_cart.jpg

        - instruction: Locate the empty slot in the cart list and Click Choose a Variant and start typing the SKU or Product Title of the product you want to add to the order
          image: /assets/images/mockdown/draft2/orders/orders_new_cart_add_item_slot_dark.jpg

        - instruction: Click Save to add the item to the order
          image: /assets/images/mockdown/draft2/orders/orders_new_cart_add_item_save_dark.jpg

        - instruction: To add another item, click the Add Item button near the top of the tab
          image: /assets/images/mockdown/draft2/orders/orders_new_cart_add_item_dark.jpg

        - instruction: Locate the new empty slot in the cart and Click Choose a Variant and start typing the SKU or Product Title of the product you want to add to the order
          notes:
          - header: Keep repeating these steps to add more items to your order
          image: /assets/images/mockdown/draft2/orders/order_new_add_item_post_out_slot_dark.jpg

      - title: Delete an Item from an Order
        steps:

        - instruction: Open the Cart tab in the Details page of the order
          image: /assets/images/mockdown/draft2/orders/orders_new_cart.jpg

        - instruction: Hover your mouse over the an item in the cart and click Delete
          image: /assets/images/mockdown/draft2/orders/orders_cart_delete_dark.jpg

  - name: Customer
  - name: Adjustments
  - name: Payments
  - name: RMA
  - name: Customer Returns
  - name: Cancel Items
---
