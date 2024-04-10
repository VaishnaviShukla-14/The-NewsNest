import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import ForgetPass from './Pages/ForgetPass';
import Login from './Pages/Login';
import Register from './Pages/Register';
import MainPage from './Pages/MainPage';
import Footer from './MandatoryItems/Footer';
import Weather from './Pages/Weather';
import Logout from './Pages/Logout';
import AdminPage from './Admin_panel/AdminPage';
import User from './Admin_panel/user';
import NewsPage from './Admin_panel/NewsPage';
import NationalNews from './ShowNews/NationalNews';
import InternationalNews from './ShowNews/Internationalnews';
import EducationNews from './ShowNews/Educationalnews';
import SportsNews from './ShowNews/Sportsnews';
import EnhancedInternationalTable from './Admin_panel/EnhancedInternationalTable';
import EnhancedNationalTable from './Admin_panel/EnhancedNationalTable';
import EnhancedEducationalTable from './Admin_panel/EnhancedEducationTable';
import EnhancedSportsTable from './Admin_panel/EnhancedSportsTable';
import DeletedUsersForm from './Admin_panel/DeletedUser';
import Blog from './Pages/Blog';
import EnhancedBlogTable from './Admin_panel/EnhancedBlogTable';
import EnhancedBlog_storyForm from './Admin_panel/EnhancedBlog_storyTable';
import EnhancedCarousel from './Admin_panel/EnhancedCarousel';
import Blognews from './ShowNews/Blognews';
import Blog_storynews from './ShowNews/Blog_storynews';
import Carouselnews from './ShowNews/Carouselnews';
import HockeyNews from './ShowNews/hockeynews';
import FootballNews from './ShowNews/footballnews';
import CricketNews from './ShowNews/Cricketnews';
import FrontPage from './Pages/FrontPage';
import Thenewsroom from './Pages/Thenewsroom';
import NewLogin from './Pages/NewLogin';
import FPnew from './Pages/FPnew';
import UserLogin from './Pages/UserLogin';
import SearchNews from './ShowNews/SearchNews';
import HighNatioNews from './HighlightNews/HighNatioNews';


function App() {
  return (
    <Router>
      <div className='App'>
          <Routes>
          <Route path="/searchnews" element={<SearchNews/>} />
          <Route path="/userlogin" element={<UserLogin/>} />
          <Route path="/fpnew" element={<FPnew/>} />
          <Route path="/newlogin" element={<NewLogin/>} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/" element={<Thenewsroom />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetpass" element={<ForgetPass />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/frontpage" element={<FrontPage />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/user" element={<User />} />
          <Route path="/newspage" element={<NewsPage />} />
          <Route path="/nationalnews" element={<NationalNews />} />
          <Route path="/internationalnews" element={<InternationalNews/>} />
          <Route path="/educationalnews" element={<EducationNews />} />
          <Route path="/sportsnews" element={<SportsNews />} />
          <Route path="/enhancedinternationaltable" element={<EnhancedInternationalTable/>} />
          <Route path="/enhancednationaltable" element={<EnhancedNationalTable/>} />
          <Route path="/enhancededutable" element={<EnhancedEducationalTable/>} />
          <Route path="/enhancedsportstable" element={<EnhancedSportsTable/>} />
          <Route path="/enhancedblogtable" element={<EnhancedBlogTable/>} />
          <Route path="/deleteUser" element={<DeletedUsersForm/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/enhancedblog_storytable" element={<EnhancedBlog_storyForm/>} />
          <Route path="/enhancedcarouseltable" element={<EnhancedCarousel/>} />
          <Route path="/blognews" element={<Blognews/>} />
          <Route path="/blog_storynews" element={<Blog_storynews/>} />
          <Route path="/carousel" element={<Carouselnews/>} />
          <Route path="/hockeynews" element={<HockeyNews/>} />
          <Route path="/footballnews" element={<FootballNews/>} />
          <Route path="/cricketnews" element={<CricketNews/>}/>
          <Route path="/highnatio" element={<HighNatioNews/>}/>
          <Route path="/searchnews" element={<SearchNews/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;





