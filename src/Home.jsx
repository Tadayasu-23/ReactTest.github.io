import React from 'react';

export const Home = () => {
  return(
    <form>
      <fieldset class='maps'>
        <legend></legend>
          <select>
            <option value="volvo" selected disabled>Откуда</option>
            <option value="Pulkovo">Пулково (LED)</option>
            <option value="Ermitraz">Эрмитраж</option>
            <option value="KinoAvrora">Кинотеатр Аврора</option>
            <option value="Teatr">Мариинский театр</option>
          </select>
          <select>
          <option value="volvo" selected disabled>Куда</option>
            <option value="Pulkovo">Пулково (LED)</option>
            <option value="Ermitraz">Эрмитраж</option>
            <option value="KinoAvrora">Кинотеатр Аврора</option>
            <option value="Teatr">Мариинский театр</option>
          </select>
          <div class='cars'>
            <div class='car'>
              <div class='class'>Стандарт</div>
              <div class='cost'>Стоимость</div>
              <div class='num'>150Р</div>
              <div class='carImg'></div>
            </div>
            <div class='car'>
              <div class='class'>Бизнес</div>
              <div class='cost'>Стоимость</div>
              <div class='num'>250Р</div>
              <div class='carImg'></div>
            </div>
            <div class='car'>
              <div class='class'>Премиум</div>
              <div class='cost'>Стоимость</div>
              <div class='num'>350Р</div>
              <div class='carImg'></div>
            </div>
          </div>
          <button class="call">Заказать</button>
        </fieldset>
    </form>
  )
}