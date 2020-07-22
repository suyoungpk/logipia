<template>
  <div class="sub-wrap">
    <h2 class="tit">프로젝트 정보</h2>
    <p style="text-align:right; font-size:12px">
      <a href="/help/Guide" target="_blank"><span>Guide</span></a>
    </p>
    <div>
      <table class="tb-info">
        <caption>
          <span class="hidden">프로젝트 기본 정보</span>
        </caption>
        <colgroup>
          <col class="header" />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th scope="row">1. 프로젝트명</th>
            <td>두산 로지피아(Admin)</td>
          </tr>
          <tr>
            <th scope="row">2. 인코딩 방식</th>
            <td>utf-8</td>
          </tr>
          <tr>
            <th scope="row">3. dtd 사용</th>
            <td>Html5</td>
          </tr>
          <tr>
            <th scope="row">4. 크로스 브라우징</th>
            <!--a href="/" onclick="toggle_object('close'); return false;">4. 크로스 브라우징</a-->
            <td> IE11,Chrome,Firefox</td>
          </tr>
          <tr>
            <th scope="row">5. 해상도(반응형 웹)</th>
            <td> 1280(MONITOR), 1024px(NETBOOK), 768px(TABLET), 640px/360px/320px(SMARTPHONE) </td>
          </tr>
          <tr>
            <th scope="row">6. 웹접근성</th>
            <td> 웹접근성 준수 </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="tit">Front 퍼블리싱 진척도(담당자 : 한숙경,나은별 / 확인자 : 오금혜) <!-- <a href="#" class="onlylink">only link</a> --></h2>
    <p style="text-align:right; font-size:12px">
      <span>● 확인 완료</span>
    </p>
    <div>
      <table class="work">
        <colgroup>
          <col class="c1" />
          <col class="c2" />
          <col class="c3" />
          <col class="c3" />
          <col class="c3" />
          <col class="c4" />
          <col class="c5" />
          <col class="c6" />
          <col class="c7" />
          <col class="c8" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" class="c1">1Dep</th>
            <th scope="col" class="c2">2Dep</th>
            <th scope="col" class="c3-1">3Dep</th>
            <th scope="col" class="c3">4Dep</th>
            <th scope="col" class="c3">5Dep</th>
            <th scope="col" class="c4">Dir</th>
            <th scope="col" class="c5">FileName</th>
            <th scope="col" class="c6">Finish</th>
            <th scope="col" class="c7">Date<br/>(pc/mobile)<br/>(tablet)</th>
            <th scope="col" class="c7">Name</th>
            <th scope="col" class="c8">Memo</th>
          </tr>
        </thead>
        <tbody>
          <tr class="tit">
            <td>GUIDE</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>/help/</td>
            <td><a href="/help/Guide" target="_blank">Guide</a></td>
            <td></td>
            <td></td>
            <td>한숙경</td>
            <td></td>
          </tr>
          <tr class="tit">
            <td>메인</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>/</td>
            <td><router-link to="/common/Main">Main</router-link></td>
            <td>●</td>
            <td>2019-05-31
              <br />(2019-06-10)<br />
              <span class="gray">(2019-06-25)</span>
            </td>
            <td>한숙경</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>메인화면_GNB</td>
            <td></td>
            <td></td>
            <td></td>
            <td>/</td>
            <td><router-link to="/common/Main">Main</router-link></td>
            <td>●</td>
            <td>2019-05-31
              <br />(2019-06-10)<br />
              <span class="gray">(2019-06-25)</span>
            </td>
            <td>한숙경</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>메인화면_마이페이지 (L)</td>
            <td></td>
            <td></td>
            <td></td>
            <td>/</td>
            <td><router-link to="/common/Main">Main</router-link></td>
            <td>●</td>
            <td>2019-05-31
              <br />(2019-06-10)<br />
              <span class="gray">(2019-06-25)</span>
            </td>
            <td>나은별, 한숙경</td>
            <td><p class="green">[06-12] 사업자회원, 개인회원 아이콘 구분</p></td>
          </tr>
          <tr>
            <td></td>
            <td>메인화면_최근 본 장비</td>
            <td></td>
            <td></td>
            <td></td>
            <td>/</td>
            <td><router-link to="/common/Main">Main</router-link></td>
            <td>●</td>
            <td>2019-05-31
              <br />(2019-06-10)<br />
              <span class="gray">(2019-06-25)</span>
            </td>
            <td>나은별, 한숙경</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>판매신청 레이어팝업</td>
            <td></td>
            <td></td>
            <td></td>
            <td>/</td>
            <td><router-link to="/common/Main">Main</router-link></td>
            <td>●</td>
            <td>2019-05-31
              <br />(2019-06-10)<br />
              <span class="gray">(2019-06-25)</span>
            </td>
            <td>나은별, 한숙경</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>헤더영역_Tablet</td>
            <td></td>
            <td></td>
            <td></td>
            <td>/</td>
            <td><router-link to="/common/Main">Main</router-link></td>
            <td>●</td>
            <td>2019-04-29<br />
            <span class="gray">(2019-06-25)</span></td>
            <td>한숙경</td>
            <td><p class="green">[06-12] M - 전체메뉴 장비판매문의 버튼(팝업) 추가</p></td>
          </tr>
          <tr>
            <td></td>
            <td>메뉴_Tablet</td>
            <td></td>
            <td></td>
            <td></td>
            <td>/</td>
            <td><router-link to="/common/Main">Main</router-link></td>
            <td>●</td>
            <td>2019-05-31<br />
            <span class="gray">(2019-06-25)</span></td>
            <td>한숙경</td>
            <td></td>
          </tr>
          <tr class="tit">
            <td>중고마켓</td>
            <td>장비구매</td>
            <td>리스트</td>
            <td></td>
            <td></td>
            <td>/market/</td>
            <td><router-link to="/market/Eqip">Eqip</router-link></td>
            <td>●</td>
            <td>2019-05-09
              <br />(2019-06-10)<br />
              <span class="gray">(2019-06-25)</span>
            </td>
            <td>한숙경</td>
            <td>
              <p class="blue">[06-12] 리스트 정렬 : botton에 감싸는 span태그 추가</p>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>상세</td>
            <td>차량정보 (T)</td>
            <td></td>
            <td>/market/</td>
            <td><router-link to="/market/Eqipdtl">Eqipdtl</router-link></td>
            <td>●</td>
            <td>2019-05-14
              <br />(2019-06-10)<br />
              <span class="gray">(2019-06-25)</span>
            </td>
            <td>한숙경</td>
            <td><p class="green">[06-11] 내 장비 판매 신청 고도화 수정</p></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>문의하기 (L)</td>
            <td>/market/</td>
            <td><router-link to="/market/Eqipdtl">Eqipdtl</router-link></td>
            <td>●</td>
            <td>2019-05-14
              <br />(2019-06-10)<br />
              <span class="gray">(2019-06-25)</span>
            </td>
            <td>나은별</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>성능점검 (T)</td>
            <td></td>
            <td>/market/</td>
            <td><router-link to="/market/Eqipdtl">Eqipdtl</router-link></td>
            <td>●</td>
            <td>2019-05-14
              <br />(2019-06-10)<br />
              <span class="gray">(2019-06-25)</span>
            </td>
            <td>한숙경</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>구매가이드 (T)</td>
            <td></td>
            <td>/market/</td>
            <td><router-link to="/market/Eqipdtl">Eqipdtl</router-link></td>
            <td>●</td>
            <td>2019-05-14
              <br />(2019-06-10)<br />
              <span class="gray">(2019-06-25)</span>
            </td>
            <td>한숙경</td>
            <td></td>
          </tr>
          <tr class="tit">
            <td>정비서비스</td>
            <td>두산 케어 서비스</td>
            <td></td>
            <td></td>
            <td></td>
            <td>/service/</td>
            <td><router-link to="/service/Dscare">Dscare</router-link></td>
            <td>●</td>
            <td>2019-05-14
              <br />(2019-06-10)<br />
              <span class="gray">(2019-06-25)</span>
            </td>
            <td>한숙경</td>
            <td>
              <p class="green">[06-11] 서브 카피 수정</p>
              <p class="green">[06-12]띄어쓰기 수정:판매에서부터 폐차할 때까지 책임지겠습니다.</p>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>유상 정비 서비스</td>
            <td></td>
            <td></td>
            <td></td>
            <td>/service/</td>
            <td><router-link to="/service/Paidrpr">Paidrpr</router-link></td>
            <td>●</td>
            <td>2019-05-14
              <br />(2019-06-10)<br />
              <span class="gray">(2019-06-25)</span>
            </td>
            <td>한숙경</td>
            <td><p class="green">[06-11] 서브 카피 수정</p></td>
          </tr>
          <tr class="tit">
            <td>렌탈</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>/rental/</td>
            <td><router-link to="/rental/Rent">Rent</router-link></td>
            <td>●</td>
            <td>2019-05-22
              <br />(2019-06-10)<br />
              <span class="gray">(2019-06-25)</span>
            </td>
            <td>한숙경</td>
            <td><p class="green">[06-11] 서브 카피 수정</p></td>
          </tr>
          <tr class="tit">
            <td>부품</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>/parts/</td>
            <td><router-link to="/parts/Part">Part</router-link></td>
            <td>●</td>
            <td>2019-05-14
              <br />(2019-06-10)<br />
              <span class="gray">(2019-06-25)</span>
            </td>
            <td>한숙경</td>
            <td><p class="green">[06-11] 서브 카피 수정</p></td>
          </tr>
          <tr class="tit">
            <td>회사소개</td>
            <td>두산 로지피아</td>
            <td></td>
            <td></td>
            <td></td>
            <td>/intro/</td>
            <td><router-link to="/intro/Intro">Intro</router-link></td>
            <td>●</td>
            <td>2019-05-03<br />
              (2019-05-30)<br />
              <span class="gray">(2019-06-13)</span>
            </td>
            <td>나은별, 한숙경</td>
            <td>
              <P>
                [05-30] 배경색이 bule로 처리 된 text에 공백문자 추가
              </P>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>고객가치</td>
            <td></td>
            <td></td>
            <td></td>
            <td>/intro/</td>
            <td><router-link to="/intro/Credo">Credo</router-link></td>
            <td>●</td>
            <td>2019-05-03<br />
              (2019-05-30)<br />
              <span class="gray">(2019-06-14)</span>
            </td>
            <td>나은별, 한숙경</td>
            <td>
              <P class="blue">
                [06-03] 띄어쓰기 수정 : 고객 맞춤형 One-stop solution
              </P>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>연혁</td>
            <td></td>
            <td></td>
            <td></td>
            <td>/intro/</td>
            <td><router-link to="/intro/History">History</router-link></td>
            <td>●</td>
            <td>2019-05-03<br />
              (2019-05-30)<br />
              <span class="gray">(2019-06-14)</span>
            </td>
            <td>나은별, 한숙경</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>홍보영상</td>
            <td></td>
            <td></td>
            <td></td>
            <td>/intro/</td>
            <td><router-link to="/intro/Vod">Vod</router-link></td>
            <td>●</td>
            <td>2019-05-22<br />
              (2019-05-31)<br />
              <span class="gray">(2019-06-14)</span>
            </td>
            <td>나은별</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>동영상 레이어팝업</td>
            <td></td>
            <td></td>
            <td>/intro/</td>
            <td><router-link to="/intro/Vod">Vod</router-link></td>
            <td>●</td>
            <td>2019-05-22
              <br />(2019-05-31)<br />
              <span class="gray">(2019-06-14)</span>
            </td>
            <td>나은별</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>찾아오시는길</td>
            <td></td>
            <td></td>
            <td></td>
            <td>/intro/</td>
            <td><router-link to="/intro/Place">Place</router-link></td>
            <td>●</td>
            <td>2019-05-22
              <br />(2019-05-31)<br />
              <span class="gray">(2019-06-14)</span>
            </td>
            <td>나은별</td>
            <td>
              <p>
                [05-31] 지도 iframe 추가, 링크 추가
              </p>
            </td>
          </tr>
          <tr class="tit">
            <td>고객센터</td>
            <td>공지사항</td>
            <td>리스트</td>
            <td></td>
            <td></td>
            <td>/center/</td>
            <td><router-link to="/center/Noti">Noti</router-link></td>
            <td>●</td>
            <td>2019-04-29<br />
              (2019-06-03)<br />
              <span class="gray">(2019-06-13)</span>
            </td>
            <td>한숙경</td>
            <td>
              [06-03] 첨부파일 표시 추가
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>상세</td>
            <td></td>
            <td></td>
            <td>/center/</td>
            <td><router-link to="/center/Notidtl">Notidtl</router-link></td>
            <td>●</td>
            <td>2019-04-29<br />
              (2019-06-03)<br />
              <span class="gray">(2019-06-13)</span>
            </td>
            <td>한숙경</td>
            <td>
              <p>
                [06-03] 첨부파일 표시 추가
              </p>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>이벤트</td>
            <td>진행중인 이벤트 (T)</td>
            <td>리스트</td>
            <td></td>
            <td>/center/</td>
            <td><router-link to="/center/Evnt">Evnt</router-link></td>
            <td>●</td>
            <td>2019-04-30<br />
              (2019-06-03)<br />
              <span class="gray">(2019-06-13)</span>
            </td>
            <td>한숙경</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>상세
            </td>
            <td></td>
            <td>/center/</td>
            <td><router-link to="/center/Evntdtl">Evntdtl</router-link></td>
            <td>●</td>
            <td>2019-04-30<br />
              (2019-06-03)<br />
              <span class="gray">(2019-06-13)</span>
            </td>
            <td>한숙경</td>
            <td>
              <p class="blue">
                [06-03] 이벤트 기간 : YYYY.MM.DD~YYYY.MM.DD 형식으로 변경
              </p>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>1:1 문의</td>
            <td>상담신청 (T)</td>
            <td></td>
            <td></td>
            <td>/center/</td>
            <td><router-link to="/center/CstAdd">CstAdd</router-link></td>
            <td>●</td>
            <td>2019-04-30<br />
              (2019-06-03)<br />
              <span class="gray">(2019-06-13)</span>
            </td>
            <td>한숙경</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>상담신청완료 (P)</td>
            <td></td>
            <td>/center/</td>
            <td><router-link to="/center/CstPop">CstPop</router-link></td>
            <td>●</td>
            <td>2019-05-03<br />
              (2019-06-03)<br />
              <span class="gray">(2019-06-13)</span>
            </td>
            <td>한숙경</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>문의내역 보기 (T)</td>
            <td>리스트</td>
            <td></td>
            <td>/center/</td>
            <td><router-link to="/center/Cst">Cst</router-link></td>
            <td>●</td>
            <td>2019-04-30<br />
              (2019-06-03)<br />
              <span class="gray">(2019-06-13)</span>
            </td>
            <td>한숙경</td>
            <td><p class="green">[06-11] 서브 카피 수정</p></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>상세</td>
            <td></td>
            <td>/center/</td>
            <td><router-link to="/center/Cstdtl">Cstdtl</router-link></td>
            <td>●</td>
            <td>2019-04-30<br />
              (2019-06-03)<br />
              <span class="gray">(2019-06-13)</span>
            </td>
            <td>한숙경</td>
            <td>
              <P>[06-03] 첨부파일 표시 추가, PC화면 답변란의 A 아이콘 추가</P>
              <p class="green">[06-11] 서브 카피 수정</p>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>두산 네트워크</td>
            <td></td>
            <td></td>
            <td></td>
            <td>/center/</td>
            <td><router-link to="/center/Ntw">Ntw</router-link></td>
            <td>●</td>
            <td>2019-05-03<br />
              (2019-06-03)<br />
              <span class="gray">(2019-06-13)</span>
            </td>
            <td>한숙경</td>
            <td><p class="green">[06-11] 서브 카피 수정</p></td>
          </tr>
          <tr>
            <td></td>
            <td>자료실</td>
            <td>리스트</td>
            <td></td>
            <td></td>
            <td>/center/</td>
            <td><router-link to="/center/Refr">Refr</router-link></td>
            <td>●</td>
            <td>2019-05-03<br />
              (2019-06-03)<br />
              <span class="gray">(2019-06-13)</span>
            </td>
            <td>한숙경</td>
            <td>
              <p class="blue">
                [06-03] 제목앞에 카테고리 추가
              </p>
            </td>
          </tr>
          <tr class="tit">
            <td>회원</td>
            <td>로그인</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><router-link to="/Login">login</router-link></td>
            <td>●</td>
            <td>2019-05-16<br />
              (2019-05-29)<br />
              <span class="gray">(2019-06-14)</span>
            </td>
            <td>나은별</td>
            <td>
              <p class="blue">
                [06-03] 로그인 유지 삭제
              </p>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>로그인 (P)</td>
            <td></td>
            <td></td>
            <td>/login/</td>
            <td><router-link to="/login/LoginPop">LoginPop</router-link></td>
            <td>●</td>
            <td>2019-05-16<br />
              (2019-05-29)<br />
              <span class="gray">(2019-06-14)</span>
            </td>
            <td>나은별</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>회원가입</td>
            <td>약관동의 및 본인인증</td>
            <td></td>
            <td></td>
            <td>/member/</td>
            <td><router-link to="/member/Jstep1">Jstep1</router-link></td>
            <td>●</td>
            <td>2019-05-16<br />
              (2019-05-29)<br />
              <span class="gray">(2019-06-14)</span>
            </td>
              <td>한숙경</td>
              <td><p class="green">[06-11] 서브 카피 수정</p></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>정보작성</td>
              <td>개인회원</td>
              <td></td>
              <td>/member/</td>
              <td><router-link to="/member/Jstep2">Jstep2</router-link></td>
              <td>●</td>
              <td>2019-05-16<br />
                (2019-05-29)<br />
                <span class="gray">(2019-06-14)</span>
              </td>
                <td>한숙경</td>
                <td>
                  <p>
                    [05-29] 파일업로드 필드 수정
                  </p>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>사업자회원</td>
                <td></td>
                <td>/member/</td>
                <td><router-link to="/member/Jstep2">Jstep2</router-link></td>
                <td>●</td>
                <td>2019-05-16<br />
                  (2019-05-29)<br />
                  <span class="gray">(2019-06-14)</span>
                </td>
                  <td>한숙경</td>
                  <td>
                    <p>
                      [05-29] 파일업로드 필드 수정<br>
                      [05-30] 업로드된 파일명 표시/삭제 추가
                    </p>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>가입완료</td>
                  <td></td>
                  <td></td>
                  <td>/member/</td>
                  <td><router-link to="/member/Jstep3">Jstep3</router-link></td>
                  <td>●</td>
                  <td>2019-05-16<br />
                    (2019-05-29)<br />
                    <span class="gray">(2019-06-14)</span>
                  </td>
                  <td>한숙경</td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>아이디/비밀번호 찾기</td>
                  <td>아이디 찾기</td>
                  <td>개인회원</td>
                  <td></td>
                  <td>/member/</td>
                  <td><router-link to="/member/Findid">Findid</router-link></td>
                  <td>●</td>
                  <td>2019-05-16<br />
                    (2019-05-29)<br />
                    <span class="gray">(2019-06-14)</span>
                  </td>
                  <td>나은별</td>
                  <td><p class="green">[06-11] 서브 카피 수정</p></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>사업자회원</td>
                  <td></td>
                  <td>/member/</td>
                  <td><router-link to="/member/Findid">Findid</router-link></td>
                  <td>●</td>
                  <td>2019-05-16<br />
                    (2019-05-29)<br />
                    <span class="gray">(2019-06-14)</span>
                  </td>
                  <td>나은별</td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>아이디 찾기 결과</td>
                  <td>/member/</td>
                  <td><router-link to="/member/FindIdComplete">FindIdComplete</router-link></td>
                  <td>●</td>
                  <td>2019-05-16<br />
                    (2019-05-30)<br />
                    <span class="gray">(2019-06-14)</span>
                  </td>
                  <td>나은별</td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>비밀번호 찾기</td>
                  <td></td>
                  <td></td>
                  <td>/member/</td>
                  <td><router-link to="/member/Findpw">Findpw</router-link></td>
                  <td>●</td>
                  <td>2019-05-20<br />
                    (2019-05-30)<br />
                    <span class="gray">(2019-06-14)</span>
                  </td>
                  <td>한숙경</td>
                  <td><p class="green">[06-11] 서브 카피 수정</p></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>비밀번호 변경</td>
                  <td></td>
                  <td>/member/</td>
                  <td><router-link to="/member/Mypw">Mypw</router-link></td>
                  <td>●</td>
                  <td>2019-05-20<br />
                    (2019-05-30)<br />
                    <span class="gray">(2019-06-14)</span>
                  </td>
                  <td>한숙경</td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>회원정보 수정</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>/member/</td>
                  <td><router-link to="/member/Myinfo1">Myinfo1</router-link></td>
                  <td>●</td>
                  <td>2019-05-20<br />
                    (2019-05-30)<br />
                    <span class="gray">(2019-06-14)</span>
                  </td>
                    <td>한숙경</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>정보수정</td>
                    <td>개인회원</td>
                    <td></td>
                    <td>/member/</td>
                    <td><router-link to="/member/Myinfo2">Myinfo2</router-link></td>
                    <td>●</td>
                    <td>2019-05-20<br />
                      (2019-05-30)<br />
                      <span class="gray">(2019-06-14)</span>
                    </td>
                      <td>한숙경</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>비밀번호 변경 (L)</td>
                      <td>/member/</td>
                      <td><router-link to="/member/Myinfo2">Myinfo2</router-link></td>
                      <td>●</td>
                      <td>2019-05-20<br />
                        (2019-05-30)<br />
                        <span class="gray">(2019-06-14)</span>
                      </td>
                      <td>한숙경</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>사업자 회원</td>
                      <td></td>
                      <td>/member/</td>
                      <td><router-link to="/member/Myinfo2">Myinfo2</router-link></td>
                      <td>●</td>
                      <td>2019-05-20<br />
                        (2019-05-30)<br />
                        <span class="gray">(2019-06-14)</span>
                      </td>
                        <td>한숙경</td>
                        <td>[05-30] 사업자등록증/사업자번호 필드 추가, 업로드된 파일명 표시/삭제 추가, 문구 추가</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>회원탈퇴</td>
                        <td>회원탈퇴 신청</td>
                        <td></td>
                        <td></td>
                        <td>/member/</td>
                        <td><router-link to="/member/Memwdr1">Memwdr1</router-link></td>
                        <td>●</td>
                        <td>2019-05-20<br />
                          (2019-05-30)<br />
                          <span class="gray">(2019-06-14)</span>
                        </td>
                        <td>한숙경</td>
                        <td>[05-30] 탈퇴버튼 상단에 동의문구 추가</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>비밀번호 입력 (L)</td>
                        <td></td>
                        <td>/member/</td>
                        <td><router-link to="/member/Memwdr1">Memwdr1</router-link></td>
                        <td>●</td>
                        <td>2019-05-21<br />
                          (2019-05-30)<br />
                          <span class="gray">(2019-06-14)</span>
                        </td>
                        <td>한숙경</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td>회원탈퇴완료</td>
                        <td></td>
                        <td></td>
                        <td>/member/</td>
                        <td><router-link to="/member/Memwdr2">Memwdr2</router-link></td>
                        <td>●</td>
                        <td>2019-05-20<br />
                          (2019-05-30))<br />
                          <span class="gray">(2019-06-14)</span></td>
                          <td>한숙경</td>
                          <td></td>
                        </tr>
                        <tr class="tit">
                          <td>기타</td>
                          <td>이용약관</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>/help/</td>
                          <td><router-link to="/help/Usetrm">Usetrm</router-link></td>
                          <td>●</td>
                          <td>2019-05-31<br />
                            (2019-06-03)<br />
                            <span class="gray">(2019-06-13)</span>
                          </td>
                          <td>나은별</td>
                          <td>
                            <p>[06-03] p tag 마크업을 list type으로 변경</p>
                            <p class="green">[06-11] 서브 카피 수정</p>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>개인정보처리방침</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>/help/</td>
                          <td><router-link to="/help/Ininfo">Ininfo</router-link></td>
                          <td>●</td>
                          <td>2019-05-31<br />
                            (2019-06-03)<br />
                            <span class="gray">(2019-06-13)</span>
                          </td>
                          <td>나은별</td>
                          <td>
                            <p>[06-03] p tag 마크업을 list type으로 변경, caption 추가</p>
                            <p class="green">[06-11] 서브 카피 수정</p>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>에러페이지</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>/help/</td>
                          <td><router-link to="/help/Error">Error</router-link></td>
                          <td>●</td>
                          <td>2019-05-31<br />
                            (2019-06-03)<br />
                            <span class="gray">(2019-06-13)</span>
                          </td>
                          <td>나은별</td>
                          <td>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </template>

<script>

export default {
  name: 'Status'
}
</script>

              <style lang="css" scoped>
              /* 정보 */
              .tb-info { WIDTH:100%;
                BORDER-BOTTOM: #888 1px solid;
                BORDER-LEFT: #888 1px solid;
                MARGIN: 0px 0px 3em;
                WIDth: 100%;
                BORDER-TOP: #888 1px solid;
                BORDER-RIGHT: #888 1px solid
              }
              .tb-info CAPTION {
                FONT-WEIGHT: 400
              }
              .tb-info COL.header {
                WIDth: 180px
              }
              .tb-info th {
                BORDER-BOTTOM: #aaa 1px dashed;
                TEXT-ALIGN: left;
                BORDER-LEFT: #aaa 1px dashed;
                PADDING-BOTTOM: 0.25em;
                PADDING-LEFT: 1em;
                PADDING-RIGHT: 1em;
                BORDER-TOP: #aaa 1px dashed;
                BORDER-RIGHT: #aaa 1px dashed;
                PADDING-TOP: 0.25em
              }
              .tb-info td {
                BORDER-BOTTOM: #aaa 1px dashed;
                TEXT-ALIGN: left;
                BORDER-LEFT: #aaa 1px dashed;
                PADDING-BOTTOM: 0.25em;
                PADDING-LEFT: 1em;
                PADDING-RIGHT: 1em;
                BORDER-TOP: #aaa 1px dashed;
                BORDER-RIGHT: #aaa 1px dashed;
                PADDING-TOP: 0.25em;
                font-size: 12px;

              }
              .tb-info th {
                BACKGROUND-COLOR: #dedede;
                BORDER-RIGHT: 0px;
                font-size: 12px;
              }
              .tb-info td {
                BORDER-LEFT: 0px
              }

              .work {
                BORDER-BOTTOM: #888 1px solid;
                BORDER-LEFT: #888 1px solid;
                MARGIN: 0px 0px 3em;
                WIDth: 100%;
                BORDER-TOP: #888 1px solid;
                BORDER-RIGHT: #888 1px solid
              }
              .work CAPTION {
                TEXT-ALIGN: right
              }
              .work tr:hover td {background: #f3f3f3}
              .work th {
                BORDER-BOTTOM: #aaa 1px solid;
                BORDER-LEFT: #aaa 1px solid;
                PADDING-BOTTOM: 0.25em;
                PADDING-LEFT: 0.5em;
                PADDING-RIGHT: 0.5em;
                BORDER-TOP: #aaa 1px solid;
                BORDER-RIGHT: #aaa 1px solid;
                PADDING-TOP: 0.25em
              }
              .work td {
                BORDER-BOTTOM: #aaa 1px solid;
                BORDER-LEFT: #aaa 1px solid;
                BORDER-TOP: #aaa 1px solid;
                BORDER-RIGHT: #aaa 1px solid;
                padding: 5px 10px;
                line-height: 17px;
              }
              .work td a {color: #0097da;}
              .work th {
                BACKGROUND-COLOR: #c0c0c0; font-size: 12px;
                BORDER-BOTTOM-WIDth: 3px
              }
              .work td {
                BACKGROUND-COLOR: #fff; font-size: 12px; letter-spacing: -0.5px;
                VERTICAL-ALIGN: middle
              }

              /* 진행상황 */
              .work .complete td {
                BACKGROUND-COLOR: #ececec
              }
              .work .during td {
                BACKGROUND-COLOR: #dafeb4
              }
              .work .deleted td {
                BACKGROUND-COLOR: #fe6565;
                TEXT-DECORATION: line-through
              }
              .work tr.tit td {
                border-top: 2px solid #333;
              }
              .work {
                width: 100%;
                min-width: 900px;
              }
              .work .c1 {
                width: 70px;
              }
              .work .c2 {
                width: 120px;
              }
              .work .c3 {
                width: 90px;
              }
              .work .c3-1 {
                width: 110px;
              }
              .work .c4 {
                width: 100px;
              }
              .work .c5 {
                width: 100px;
              }
              .work .c6 {
                width: 40px;
                text-align: center;
              }
              .work .c7 {
                width:90px;
                text-align: center;
              }
              .work .c8 {
                width: auto;
              }
              .work tr td:nth-child(6) {
                text-align: left;
              }
              .work tr td:nth-child(7) {
                text-align: center;
              }
              .work tr td:nth-child(8) {
                text-align: center;
              }
              .work tr td:nth-child(9) {
                text-align: center;
              }
              .work tr td:nth-child(10) {
                text-align: center;
              }
              .work tr td:nth-child(11) {
                text-align: left;
              }
              .work tr td:nth-child(12) {
                text-align: center;
              }
              .work tr td span {
                color: #666;
              }

              h2.tit {
                position: relative;
              }
              h2.tit a {
                position: absolute;
                top: 0;
                right: 0;
                border: 1px solid #999;
                padding: 3px 10px;
                background-color: #999;
                font-size: 11px;
              }

              #close {
                display: none;
                margin-bottom: 50px;
                border-bottom: 1px dotted #ccc;
                overflow: hidden;
              }
              #close:after {
                clear: both;
              }
              #close > h2.tit {
                height: 27px;
              }
              .blue {color:#0097da}
              .green {color:#1fb1bf}
              .gray {color:#9a9a9a !important}
              </style>
