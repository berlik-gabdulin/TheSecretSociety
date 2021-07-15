# TheSecretSociety mini game

Краткое описание функционала приложения

В приложении есть главный класс MainScene.js, тут содержится основной конфиг - разрешение, размеры, стейт приложения, который содержит статусы _intro_, _outro_, счетчик с собаками _hiddenDogs_ и массив _objects_ - массив всех объектов сцены, которым необходимо менять свойства в зависимости от ориентации устройства.
У каждого объекта в свою очередь имеются свойства **portrait** и **landscape**, которые содержат настройки для разных ориентаций - конфигурации для функции **rotateHandlerOnLoad** вида

```
portrait: {
    x: xPortraitPosition,
    y: yPortraitPosition,
    config: {
        FontStylesObject
        }
}
landscape: {
    x: xLandscapePosition,
    y: yLandscapePosition,
    config: {
        FontStylesObject
        }
}
```

---

## assets.js

Содержит статичные данные в виде массивов с объектами ассетов приложения - изображения, массив с "собаками" **doggyArr**.

---

## doggy.js

Функция, перебирающая массив doggyArr и по нему выставляющая собак на поле, навешивает слушатель клика, по которому ставит на поле круг-обводку и анимирует его. На каждый клик запускается _rotateHandler()_. Принимиает "сцену" **scene**, и массив с данными **state.objects**.

---

## rotateHandler.js

Содержит 2 функции, **rotateHandlerOnLoad** и **rotateHandler**.
**rotateHandlerOnLoad** принимает так же сцену и ориентацию экрана, перебирает **state.objects**, и в соответствии с ориентацией экрана настраивает все объекты - положение на экране, origin, scale и тд.

**rotateHandler** по сути только следит за сменой ориентации экрана и вызывает **rotateHandlerOnLoad** на каждое изменение передавая соответствующее значение.

---

## overlay.js

Рисует затемненный экран с текстом и графикой в начале и конце мини-игры. Рисует само затемнение, текст, прощитывает градиент для текста.

---

## setKeys.js

Функция, для автоматизации процесса передачи настроек из конфига нужной ориентации в сам целевой объект, например

```
object.x = object.portrait.x;
```

---

## intro.js и outro.js

Файлы-рудименты. Функции с конфигами текста и спрайтов для экрана приглашения и экрана после выполнения "квеста". С данными конфигами вызывается **overlay()**.

_Можно вынести конфиги в **assets.js**, и просто вызывать **overlay()** внутри **MainScene**, файлы остались с момента когда интро и оутро были самостоятельными функциями несущими весь функционал в себе._

---
