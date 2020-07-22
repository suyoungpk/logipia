import Default from '@/components/common/Default'
import FindId from '@/components/member/FindId'
import findIdComplete from '@/components/member/FindIdComplete'
import FindPw from '@/components/member/FindPw'
import Jstep1 from '@/components/member/Jstep1'
import Jstep2 from '@/components/member/Jstep2'
import Jstep3 from '@/components/member/Jstep3'
// import Jstep4 from '@/components/member/Jstep4'
// import Jstep5 from '@/components/member/Jstep5'
import MemWdr1 from '@/components/member/MemWdr1'
import MemWdr2 from '@/components/member/MemWdr2'
import MyInfo1 from '@/components/member/MyInfo1'
import MyInfo2 from '@/components/member/MyInfo2'
import MyPw from '@/components/member/MyPw'
import MypageAlarm from '@/components/member/MypageAlarm'
import MypageInterest from '@/components/member/MypageInterest'
import MypageMyitems from '@/components/member/MypageMyitems'
import MypageRecent from '@/components/member/MypageRecent'

const router = [
  {
    path: '/',
    component: Default,
    children: [
      {path: 'member/findId', name: 'findId', component: FindId},
      {path: 'member/findIdComplete', name: 'findIdComplete', component: findIdComplete},
      {path: 'member/findPw', name: 'findPw', component: FindPw},
      {path: 'member/jstep1', name: 'jstep1', component: Jstep1},
      {path: 'member/jstep2', name: 'jstep2', component: Jstep2},
      {path: 'member/jstep3', name: 'jstep3', component: Jstep3},
      // {path: 'member/jstep4', name: 'jstep4', component: Jstep4},
      // {path: 'member/jstep5', name: 'jstep5', component: Jstep5},
      {path: 'member/MemWdr1', name: 'MemWdr1', component: MemWdr1},
      {path: 'member/MemWdr2', name: 'MemWdr2', component: MemWdr2},
      {path: 'member/MyInfo1', name: 'MyInfo1', component: MyInfo1},
      {path: 'member/MyInfo2', name: 'MyInfo2', component: MyInfo2},
      {path: 'member/myPw', name: 'myPw', component: MyPw},
      {path: 'member/mypage-interest', name: 'MypageInterest', component: MypageInterest},
      {path: 'member/mypage-recent', name: 'MypageRecent', component: MypageRecent},
      {path: 'member/mypage-myitems', name: 'MypageMyitems', component: MypageMyitems},
      {path: 'member/mypage-alarm', name: 'MypageAlarm', component: MypageAlarm},
      {path: 'member/mypage',  redirect: { name: 'MypageInterest' }}
    ]
  }
]

export default router
