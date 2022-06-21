# 프로젝트 소개

![branchTime](https://user-images.githubusercontent.com/78855917/174509054-5953ae67-b0ed-4ccc-84fd-3b8d53bcee83.png)

## 클론코딩 사이트

브런치(https://brunch.co.kr/)

## 작업 기간

2022.06.07 ~ 2022. 06. 17

## 팀명

브랜치타임(Branch Time)

## 팀원 소개

| 개발 분야  | 팀원 명                        |
| ---------- | ------------------------------ |
| 프론트엔드 | 김형겸, 박슬기, 박주영, 신윤지 |
| 백엔드     | 김민정, 임한구                 |

# Coding Convention

- 들여쓰기는 tab, 혹은 공백 문자 2개를 사용한다.
- 변수와 함수, className 명명 규칙은 Camel Case를 사용한다.
- 값이 변하지 않는 변수는 const를, 값이 변하는 변수는 let을 사용하여 선언하고 var는 절대로 사용하지 않는다.
- 함수 선언시 arrow function(() => {}) 위주로 사용한다.
- 주석은 코드 설명보다는 수정 사항이나 미구현 사항을 기재할 때 사용하기로 한다.
- 함수 네이밍 규칙은 해당 함수의 동작을 앞에, 동작이 적용될 태그를 뒤에 위치하게 작명한다. (ex) handleInput)
- component의 전체를 감싸는 최상단 태그의 className은 컴포넌트 이름으로 명명한다. (ex) product, productlist)
- styled-components를 사용한다.
- 인라인 스타일링은 지양한다.

## 기술 스택

FrontEnd - HTML/CSS, JavaScript, React.js , React-Router, React-Router-DOM, Styled-components

BackEnd - Django, Postman

## 프론트 엔드 업무 파트

**김형겸 - 메인 페이지, 검색, 소셜 로그인** <br>
박슬기 - Nav, 글 쓰기 페이지 <br>
박주영 - 글 목록 페이지, 글 상세 페이지 <br>
신윤지 - 마이 페이지, Book Animation <br>

## 협업 도구

trello
<img width="1408" alt="image" src="https://user-images.githubusercontent.com/78855917/174509234-78bd5d3d-fa05-4839-bd50-228029d04063.png">
![image](https://user-images.githubusercontent.com/78855917/174509248-7e516817-abb7-4d33-a312-d6e3a59f5ea6.png)

## Coding Convention

1. 들여쓰기는 tab, 혹은 공백 문자 2개를 사용한다.
2. 변수와 함수, className 명명 규칙은 `Camel Case`를 사용한다.
3. 값이 변하지 않는 변수는 const를, 값이 변하는 변수는 let을 사용하여 선언하고 var는 절대로 사용하지 않는다.
4. 함수 선언시 arrow function`(() => {})` 위주로 사용한다.
5. 주석은 코드 설명보다는 수정 사항이나 미구현 사항을 기재할 때 사용하기로 한다.
6. 함수 네이밍 규칙은 해당 함수의 동작을 앞에, 동작이 적용될 태그를 뒤에 위치하게 작명한다. (ex) handleInput)
7. component의 전체를 감싸는 최상단 태그의 className은 컴포넌트 이름으로 명명한다. (ex) product, productlist)
8. 인라인 스타일링은 지양한다.

# 구현 내용

### Nav & sideDrawer

- 반응형 UI 구현
- woff 웹 폰트 내장을 통한 golbal style 지정
- scroll event에 따른 UI 변경
- 엔드 포인트에 따른 컴포넌트 변경
- useNavigate를 통한 페이지 이동
- localStorage를 통한 로그인 상태에 따른 UI 변경
  <br/>

### write 페이지

- markdown editor Library 설정
- DB를 활용한 Main Category & Sub Category 설정
- Form Data를 이용한 write Header 배경 이미지 삽입 및 삭제
- write Header color infinite 변경을 통한 꾸미기
- Title align 변경
  <br/>

### Main

```
- React-slick을 통한 메인 페이지 Carousel 구현 및 리렌더링시마다 랜덤 데이터로 재배열
- useSearchParams를 사용하여 추천 작가리스트 버튼 클릭시마다 query parameter 변경하여 다른 데이터 fetch
```

### Footer

<img width="1717" alt="image" src="https://user-images.githubusercontent.com/78855917/174509607-6b83a237-cc7a-44b3-8f13-cc6bc5221475.png">

### Search

```
-  백엔드에서 글과 작가 전체 데이터를 fetch해온 뒤, 검색 value 값을 include하는 데이터들만 filter 메소드를 통해 재반환
-  path parameter를 활용하여 글 제목 클릭 시 해당 글의 상세 페이지로, 작가 이름 클릭 시 해당 작가의 상세 페이지로 이동하도록 구현
```

### 회원가입 /

```
- OAuth를 통한 Kakao API 소셜 로그인 구현
- .env 파일을 통해 client_id와 redirect_uri 보안 처리
```

### User page
![ezgif-2-1b836a84a8](https://user-images.githubusercontent.com/75124027/174717296-5a8dbee7-f295-4c49-8186-525c4b9c013c.gif)

```
- boolean 값을 통해 현재 위치한 user 정보가 나인지 타인인지 구분하여 서로 다른 UI를 보여줌
- My Page일 경우 Form Data를 이용하여 프로필 수정 시 이미지 수정이 가능, 미리보기 기능도 추가
- User page일 경우 제안하기와 신고하기가 ellipsis 버튼을 통해 활성화됨
- useNavigation으로 페이지 이동
- localstorage에 token이 없는 경우 My page가 나타나지 않음
```

### Book Animation

![BookAnimation](https://user-images.githubusercontent.com/75124027/174701222-ac15ab9f-6f89-4f61-9b5c-9273f0d598e1.gif)

```
- styled keyframes를 사용하여 애니메이션을 구현
```

---
