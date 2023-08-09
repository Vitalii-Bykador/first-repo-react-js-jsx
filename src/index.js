import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.js";
import Main from "./Main.js";
import Aside from "./Aside.js";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
    <div>
        <Header head="Бегущий город"/>
        <Main 
            head="Прибегайте!"
            text='Начало мероприятия "Бегущий город" в субботу в 10:00 часов на
            площади Ленина. Маршрут будет представлен перед началом пробега,
            расстояние около 10 км.'
        />
        <Aside 
            set={{
                "but1": ["https://donstu.ru/", "мы в дгту"],
                "but2": ["https://rostselmash.com/", "мы на РСМ"],
                "but3": ["https://rostov.megafon.ru/", "спонсор"]
            }}
        />
    </div>
);
