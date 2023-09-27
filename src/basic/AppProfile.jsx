// import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import Avatar from './components/Avatar';

function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert('ddd');
  };

  return (
    <>
      <button onClick={handleClick}>버튼</button>
      <Avatar
        image="https://images.unsplash.com/photo-1694682845789-56788fccf4dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3299&q=80"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1694682845789-56788fccf4dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3299&q=80"
        name="james"
        title="프론트앤드 개발자"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1694161097603-2858ec0107fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3235&q=80"
        name="anna"
        title="백엔드 개발자"
      />
      <Profile
        image="https://images.unsplash.com/photo-1682687982204-f1a77dcc3067?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3774&q=80"
        name="bob"
        title="프론트앤드 개발자"
      />
    </>
  );
}

export default AppProfile;
