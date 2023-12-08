// components/ShoppingCart.js
import React from 'react'
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalContent,
  useDisclosure,
} from '@nextui-org/react'
import Counter from '../Counter'
import MyButton from '@/themes/MyButton'
import { useCart } from '../../../useFulls/useCart'

const ShoppingCart = () => {
  const {
    cart,
    isCartOpen,
    openCart,
    closeCart,
    addToCart,
    removeFromCart,
    clearCart,
  } = useCart()

  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <MyButton onClick={onOpen}>Оформить заказ</MyButton>

      <Modal
        size="3xl"
        isOpen={isOpen}
        placement="center"
        onOpenChange={onOpenChange}
        classNames={{
          body: 'py-6',
          backdrop: 'bg-rgba(2, 2, 2, 0.85)',
          base: 'bg-transparent shadow-none p-y-4 p-x-10 border-3 border-solid border-disabled',
          header: 'border-b-[1px] border-[#292f46] p-y-4 p-x-2',
          footer: 'border-t-[1px] border-[#292f46]',
          closeButton: 'hover:bg-white/5 active:bg-white/10',
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between mb-2"
                  >
                    <p>{item.name}</p>
                    <Counter />
                  </div>
                ))}
              </ModalBody>
              <ModalFooter>
                <MyButton>Онлайн заказ</MyButton>
                <MyButton
                  variant="bordered"
                  className="bordered text-light border-3 border-solid border-white shadow-[0px 0px 20px 0px #F5FAFF]"
                >
                  3 шт / 78 грн
                </MyButton>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ShoppingCart
