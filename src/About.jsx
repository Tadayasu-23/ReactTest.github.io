import React from 'react';

export const About = () => {
  return(
    <>
      <form class='profile'>
        <div class='description'>
          <div class='zagolovok'>Профиль</div>
          <div class='zagDesc'>Введите платёжные данные</div>
        </div>
        <div class='block'>
          <div class='leftBlock'>
            <label name='name'>Имя владельца*</label>
            <br />
            <input class='cardForm' type='name' name='name' required />
            <br />
            <label name='card'>Номер карты*</label>
            <br />
            <input class='cardForm' type="text" maxlength='16' minlength='16' required placeholder='1234 1234 1234 1234'/>
            <br />
            <div class='bottomInput'>
              <label name='data'>MM/YY*</label>
              <br />
              <input class='cardForm cardFormBottom' type="month" required/>
            </div>
            <div class='bottomInput'>
              <label name='cvc'>CVC*</label>
              <br />
              <input class='cardForm cardFormBottom' type="text" minlength='3' maxlength='3' required/>
            </div>
          </div>
          <div class='rightBlock'>
            <div class='circle'></div>
            <div class='cvcCopy'>12/24</div>
            <div class='cardCopy'>1234 1234 1234 1234</div>
            <div class='square'></div>
          </div>
        </div>
        <button class="save">Сохранить</button>
      </form>
    </>
  )
}