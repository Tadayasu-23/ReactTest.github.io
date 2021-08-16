import React from 'react';

export const Profile = () => {
  return(
    <>
      <div class='logo'>
        <div class='logoTaxi'>LoftTaxi</div>
      </div>
      <div class='container'>
        <div class='loginContainer'>
          <form class='loginForm'>
            <fieldset class='loginBorder'>
              <legend class='title'>Войти</legend>
                <input class='loginInput' type="text" placeholder='Имя пользователя*'/>
                <input class='loginInput' type="text" placeholder='Пароль*'/>
                <button class="call loginButton">Войти</button>
                <div class='bottomText'>
                  <span>Новый пользователь?</span>
                  <button class='ButtonOn'>Зарегестрируйтесь</button>
                </div>
              </fieldset>
          </form>
        </div>
        <div class='loginContainer Registration'>
          <form class='loginForm'>
            <fieldset class='loginBorder'>
              <legend class='title'>Регистрация</legend>
                <input class='loginInput' type="text" placeholder='Адрес электронной почты*'/>
                <input class='loginInput firstName' type="text" placeholder='Имя*'/>
                <input class='loginInput lastName' type="text" placeholder='Фамилия*'/>
                <input class='loginInput' type="text" placeholder='Пароль*'/>
                <button class="call loginButton">Войти</button>
                <div class='bottomText'>
                  <span>Уже зарегистрирован?</span>
                  <button class='ButtonOn' onClick='hidden'>Войти</button>
                </div>
              </fieldset>
          </form>
        </div>
      </div>
    </>
  ) 
}