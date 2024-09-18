import { Header } from "./components/Header";
import { Markets } from "./components/Markets";
import { Footer } from "./components/Footer";
import styles from "./App.module.css";
import { CiShop, CiShoppingBasket, CiMapPin } from "react-icons/ci";
import { BsArrowRight } from "react-icons/bs";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, useFieldArray } from "react-hook-form";
import { useEffect, useState } from "react";
import yakultRed from "../assets/yakult.png";
import yakult40Ligth from "../assets/40Ligth.png";
import yakult40 from "../assets/Yakult40.png";

const schema = yup.object({
  storeName: yup.string().required(),
  products: yup.array().of(
    yup.object().shape({
      id: yup.string().required(),
      name: yup.string().required(),
      price: yup.number().required(),
      amount: yup.number(),
    })
  ),
});

export function App() {
  const { register, setValue, watch, handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      storeName: "",
    },
  });

  const [stores, setStores] = useState([]);
  const [step, setStep] = useState(0);
  const [orders, setOrders] = useState();

  const { fields: fieldsProducts } = useFieldArray({
    control: control,
    name: "products",
  });

  useEffect(() => {
    const listStores = [
      {
        id: 1,
        name: "BigBom",
        local: "centro",
      },
      {
        id: 2,
        name: "SempreVale",
        local: "DeR",
      },
      {
        id: 3,
        name: "Spasso",
        local: "Mantiqueira",
      },
    ];
    setStores(listStores);
    const listProducts = [
      {
        id: 1,
        name: "Leite Fermentado Yakult",
        price: 2.0,
        img: yakultRed,
        amount: 0,
      },
      {
        id: 2,
        name: "Yakult 40 light",
        price: 2.5,
        img: yakult40Ligth,
        amount: 0,
      },
      {
        id: 3,
        name: "Yakult 40",
        price: 2.25,
        img: yakult40,
        amount: 0,
      },
    ];
    setValue("products", listProducts);
  }, [setValue]);

  function handleStoreName(name) {
    setValue("storeName", name);
    setStep(1);
  }

  function finishOrder({ products }) {
    const list = [];
    products.forEach((product) => {
      if (product.amount > 0) {
        list.push({ ...product, totalAmount: product.amount * product.price });
      }
    });

    if (list.length > 0) {
      setStep(2);
      setOrders(list);
      console.log(list);
    }
  }

  return (
    <div className={styles.wrapperBodyApp}>
      <Header />
      {/* --NavBar------------------------------------------------ */}
      <div className={styles.bodyApp}>
        <div className={styles.container}>
          <button className={styles.shop} onClick={() => setStep(0)}>
            <CiShop />
          </button>
          <BsArrowRight />
          <button
            className={styles.products}
            onClick={() => setStep(1)}
            disabled={!watch("storeName")}
          >
            <CiShoppingBasket />
          </button>
          <BsArrowRight />
          <button
            className={styles.changes}
            onClick={() => setStep(2)}
            disabled={step < 2}
          >
            <CiMapPin />
          </button>
        </div>
        {/* --------------------------------------------------------- */}
        {step === 0 ? (
          <div className={styles.content}>
            {stores.map((store) => (
              <Markets
                handleStoreName={handleStoreName}
                key={store.id}
                id={store.id}
                name={store.name}
                local={store.local}
                settedStoreName={watch("storeName")}
              />
            ))}
          </div>
        ) : null}
        {step === 1 ? (
          <div className={styles.content}>
            <button
              onClick={handleSubmit(finishOrder)}
              className={styles.btnFinishOrder}
            >
              Finalizar
            </button>
            {fieldsProducts.map((field, index) => (
              <div key={field.id} className={styles.productContainer}>
                <div className={styles.productImg}>
                  <img src={watch(`products.${index}.img`)} alt="" />
                  <div className={styles.productInfo}>
                    <p className={styles.name}>
                      {watch(`products.${index}.name`)}
                    </p>
                    <p className={styles.price}>
                      Preço da unidade: R${watch(`products.${index}.price`)}
                    </p>
                    <p className={styles.amount}>
                      Quantidade:
                      <input
                        onChange={(event) => {
                          if (!/[0-9.]*/.test(event.key)) {
                            event.preventDefault();
                          }
                        }}
                        type="number"
                        min="0"
                        step="1"
                        {...register(`products.${index}.amount`)}
                        className={styles.input}
                      />
                    </p>
                  </div>
                </div>
                <div className={styles.productContent}></div>
              </div>
            ))}
          </div>
        ) : null}

        {step === 2 ? (
          <div className={styles.content}>
            <div className={styles.wrapperOrder}>
              <h2>Pedidos</h2>
              <p className={styles.descAmount}>Quantidade</p>
              <p className={styles.descName}>Nome</p>
              <p className={styles.descPrice}>Preço</p>
              <p className={styles.descTotal}>Total</p>

              <div className={styles.wrapperOrderReceipt}>
                {orders.map((order) => (
                  <div key={order.id} className={styles.orderReceipt}>
                    <p className={styles.orderAmount}>{order.amount}</p>
                    <p className={styles.orderName}>{order.name}</p>
                    <p className={styles.orderPrice}>R$ {order.price}</p>
                    <p className={styles.orderTotalAmount}>
                      R$ {order.totalAmount}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>
      {/* --------------------------------------------------------- */}

      <Footer />
    </div>
  );
}
