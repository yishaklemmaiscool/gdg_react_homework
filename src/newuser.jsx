import image1 from './assets/profilepic 2.jpg'

function NewUser() {
  return (
    <>
      <div className="yishakl">
        <header className='yishak2'>
          <img src={image1} className="profile pic" alt="my profile pic" />
          <h1>Welcome to my first react project </h1>
          <p>This is a simple page done by using react.</p>
          <h2>things i have learned so dar:</h2>
          <ul>
            <li>how to code using react.</li>
            <li>how to edit the page by applying css.</li>
            <li> how to import photo and differnet assets.</li>
          </ul>
          <h4>Enjoy my coding journey!</h4>
        </header>
      </div>
    </>
  );
}

export default NewUser;
 
 
 
 
 
 