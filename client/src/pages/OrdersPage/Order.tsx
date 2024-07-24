import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DeleteIcon from '@mui/icons-material/Delete'
import { OrderType } from '../../types/Order'
import { ConsumerTypeForOrder } from '../../types/Consumer'
import { ProductDetailForOrder } from '../../types/Product'

interface OrderPropsType {
  order: OrderType
  setRefetchOrders: React.Dispatch<React.SetStateAction<boolean>>
}

enum deliveryStatusesType {
  Waiting = 'Waiting',
  Transported = 'Transported',
  Delivered = 'Delivered',
}

enum paymentStatusesType {
  UnPaid = 'UnPaid',
  Paid = 'Paid',
}

const Order: React.FC<OrderPropsType> = ({ order, setRefetchOrders }) => {
  const [
    consumerDetail,
    setConsumerDetail,
  ] = useState<ConsumerTypeForOrder | null>(null)
  const [productDetails, setProductDetails] = useState<
    ProductDetailForOrder[] | null
  >(null)
  const [deliveryStatus, setDeliveryStatus] = useState(order.deliveryStatus)
  const [paymentStatus, setPaymentStatus] = useState(order.paymentStatus)

  const token = localStorage.getItem('token')
  const parsedToken = JSON.parse(token!)

  useEffect(() => {
    const fetchConsumerDetail = async () => {
      const consumerResponse = await fetch(
        `http://localhost:5000/api/v1/consumers/${order.consumerID}`,
        {
          mode: 'cors',
          headers: {
            Authorization: `Bearer ${parsedToken}`,
          },
        },
      )
      const consumerData = await consumerResponse.json()
      setConsumerDetail(consumerData.consumer[0])
    }

    const fetchProductDetails = async () => {
      const productDetails = await Promise.all(
        order.products.map(async (product) => {
          const productDetailResponse = await fetch(
            `http://localhost:5000/api/v1/products/orderDetail/${product.productID}`,
          )
          const productDetailData = await productDetailResponse.json()
          return {
            ...productDetailData.product,
            quantity: product.quantity,
          }
        }),
      )

      setProductDetails(productDetails)
    }

    fetchConsumerDetail()
    fetchProductDetails()
  }, [order, parsedToken])

  useEffect(() => {
    const updateOrder = async () => {
      const updateOrderBody = {
        deliveryStatus,
        paymentStatus,
      }
      const orderResponse = await fetch(
        `http://localhost:5000/api/v1/orders/${order._id}`,
        {
          method: 'PATCH',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${parsedToken}`,
          },
          body: JSON.stringify(updateOrderBody),
        },
      )
      const orderData = await orderResponse.json()
      console.log(orderData)
    }

    updateOrder()
  }, [deliveryStatus, paymentStatus, order.consumerID, parsedToken])

  const handleDeleteOrder = async () => {
    const deleteOrderResponse = await fetch(
      `http://localhost:5000/api/v1/orders/${order._id}`,
      {
        method: 'DELETE',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${parsedToken}`,
        },
      },
    )

    const deleteOrderData = await deleteOrderResponse.json()
    console.log(deleteOrderData)
    setRefetchOrders(true)
  }

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        style={{ backgroundColor: '#F1F3F5' }}
      >
        {consumerDetail && productDetails ? (
          <div className="grid grid-cols-14">
            <div className="col-span-1">1</div>
            <div className="col-span-1">{order.orderDate}</div>
            <div className="col-span-2 pl-2">{consumerDetail.name}</div>
            <div className="col-span-2">{consumerDetail.mobileNo}</div>
            <div className="col-span-3">{consumerDetail.location}</div>
            <div className="col-span-1 text-center">
              {order.products.length}
            </div>
            <div className="col-span-1">AED {order.totalPrice}</div>
            <div className="col-span-1 ml-1">
              <select
                className="p-1"
                title="delivery status"
                onChange={(e) => {
                  setDeliveryStatus(e.target.value as deliveryStatusesType)
                }}
                defaultValue={order.deliveryStatus}
              >
                <option value="Waiting">Waiting</option>
                <option value="Transported">Transported</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
            <div className="ml-2 col-span-1">
              <select
                className="p-1"
                title="payment status"
                onChange={(e) => {
                  setPaymentStatus(e.target.value as paymentStatusesType)
                }}
                defaultValue={order.paymentStatus}
              >
                <option value="UnPaid">UnPaid</option>
                <option value="Paid">Paid</option>
              </select>
            </div>
            <button
              title="delete"
              onClick={handleDeleteOrder}
              className="col-span-1 flex justify-center"
            >
              <DeleteIcon />
            </button>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </AccordionSummary>
      <AccordionDetails>
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-14 font-semibold">
            <div className="col-span-1"></div>
            <div className="col-span-8 grid grid-cols-8">
              <div className="col-span-1">SL No.</div>
              <div className="col-span-4 flex gap-2">Product Name</div>
              <div className="col-span-1">Qty</div>
              <div className="col-span-2">Total Price</div>
            </div>
            <div className="col-span-5"></div>
          </div>
          {productDetails &&
            productDetails.map((product, index) => {
              return (
                <div className="grid grid-cols-14">
                  <div className="col-span-1"></div>
                  <div className="col-span-8 grid grid-cols-8">
                    <div className="col-span-1 flex items-center">
                      {index + 1}
                    </div>
                    <div className="col-span-4 flex items-center gap-2">
                      <div className="h-10 w-8 flex items-center justify-center overflow-hidden rounded-md">
                        <img
                          className="object-cover w-full h-full"
                          src="/apple.png"
                          alt=""
                        />
                      </div>
                      <div>{product.title}</div>
                    </div>
                    <div className="col-span-1 flex items-center">
                      x {product.quantity}
                    </div>
                    <div className="col-span-2 flex items-center">
                      AED {product.price}
                    </div>
                  </div>
                  <div className="col-span-5"></div>
                </div>
              )
            })}
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

export default Order
