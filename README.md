# wanted_pre_onboarding

## 구현 결과 링크

https://seungyeon119.github.io/wanted_pre_onboarding/

## 구현 방법

- [Toggle.js](https://github.com/seungyeon119/wanted_pre_onboarding/pull/2)
- [Tab.js](https://github.com/seungyeon119/wanted_pre_onboarding/pull/3)
- [Slider.js](https://github.com/seungyeon119/wanted_pre_onboarding/pull/6)
- [Input.js](https://github.com/seungyeon119/wanted_pre_onboarding/pull/4)
- [Dropdown.js](https://github.com/seungyeon119/wanted_pre_onboarding/pull/5)

## 구현하면서 어려웠던 점 및 해결 방법

#### 어려웠던 점

Slider.js를 구현할 때 1, 25, 50, 75, 100% 지점에 Tick을 구현하는 것이 어려웠습니다.  
처음에는 `position: absolute`로 설정하여 각 Tick의 `left` 속성값을 달리하여 간격을 맞추려고 하였습니다. 하지만 이렇게 하니 슬라이더와 width를 동일하게 잡더라도 그 위치가 조금씩 차이가 있었습니다.

#### 해결 방법

```css
display: flex;
justify-content: space-between;
```

flex를 통해 Tick들의 간격을 동일하게 가지면서 최대한 양옆으로 펴주는 방식으로 나열하니, input과 같은 위치에 틱들이 자리하게 되었습니다.

| as-is                                                                                                           | to-be                                                                                                           |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ![image](https://user-images.githubusercontent.com/65777285/164966281-3f413328-623b-40e3-ba0c-60b388c2fbb5.png) | ![image](https://user-images.githubusercontent.com/65777285/164966411-2582428e-1c86-4633-8fda-4cdc42a67d1c.png) |
| 슬라이더에서 100% 위치와 틱의 100% 위치가 다름                                                                  |                                                                                                                 |

## 기타 중점적으로 생각했던 부분

- Dropdown.js의 드롭다운이나 돋보기 아이콘처럼 별다른 기능이 없는 부분은 직접적인 마크업이 아닌 css로 구현하려고 노력하였습니다.

| 구현방법                                                                                                        | 결과                                                                                                            |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ![image](https://user-images.githubusercontent.com/65777285/164966540-8f251f46-7ae5-449e-94d6-de4cc17f6dd4.png) | ![image](https://user-images.githubusercontent.com/65777285/164966480-8436c430-c58c-46f9-b006-3a74b59c480e.png) |
| `&::after`로 pseudo-element 생성                                                                                |                                                                                                                 |
# wanted_pre_onboarding

## 구현 결과 링크

https://seungyeon119.github.io/wanted_pre_onboarding/

## 구현 방법

- [Toggle.js](https://github.com/seungyeon119/wanted_pre_onboarding/pull/2)
- [Tab.js](https://github.com/seungyeon119/wanted_pre_onboarding/pull/3)
- [Slider.js](https://github.com/seungyeon119/wanted_pre_onboarding/pull/6)
- [Input.js](https://github.com/seungyeon119/wanted_pre_onboarding/pull/4)
- [Dropdown.js](https://github.com/seungyeon119/wanted_pre_onboarding/pull/5)

## 구현하면서 어려웠던 점 및 해결 방법

#### 어려웠던 점

Slider.js를 구현할 때 1, 25, 50, 75, 100% 지점에 Tick을 구현하는 것이 어려웠습니다.  
처음에는 `position: absolute`로 설정하여 각 Tick의 `left` 속성값을 달리하여 간격을 맞추려고 하였습니다. 하지만 이렇게 하니 슬라이더와 width를 동일하게 잡더라도 그 위치가 조금씩 차이가 있었습니다.

#### 해결 방법

```css
display: flex;
justify-content: space-between;
```

flex를 통해 Tick들의 간격을 동일하게 가지면서 최대한 양옆으로 펴주는 방식으로 나열하니, input과 같은 위치에 틱들이 자리하게 되었습니다.

| as-is                                                                                                           | to-be                                                                                                           |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ![image](https://user-images.githubusercontent.com/65777285/164966281-3f413328-623b-40e3-ba0c-60b388c2fbb5.png) | ![image](https://user-images.githubusercontent.com/65777285/164966411-2582428e-1c86-4633-8fda-4cdc42a67d1c.png) |
| 슬라이더에서 100% 위치와 틱의 100% 위치가 다름                                                                  |                                                                                                                 |

## 기타 중점적으로 생각했던 부분

- Dropdown.js의 드롭다운이나 돋보기 아이콘처럼 별다른 기능이 없는 부분은 직접적인 마크업이 아닌 css로 구현하려고 노력하였습니다.

| 구현방법                                                                                                        | 결과                                                                                                            |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ![image](https://user-images.githubusercontent.com/65777285/164966540-8f251f46-7ae5-449e-94d6-de4cc17f6dd4.png) | ![image](https://user-images.githubusercontent.com/65777285/164966480-8436c430-c58c-46f9-b006-3a74b59c480e.png) |
| `&::after`로 pseudo-element 생성                                                                                |                                                                                                                 |
