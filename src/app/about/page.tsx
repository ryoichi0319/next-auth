
interface User {
    name: string;
    urls: {
        pc: string;
      };
  }
  
  interface Shop {
    name: string;
    urls: {
      pc: string;
    };
  }
  
  interface HotPepperResponse {
    results: {
      shop: Shop[];
    };
  }
  
  const fetchUsers: () => Promise<User[]> = async () => {
    const apiKey = process.env.API_KEY;
    const baseUrl = "https://webservice.recruit.co.jp/hotpepper/gourmet/v1/";
    const serviceArea = "X385"; // サービスエリアを指定
    const format = "json"; // デフォルトがXMLフォーマットなのでJSONを指定
  
    const url = `${baseUrl}?key=${apiKey}&small_area=${serviceArea}&genre=G012&count=5&order=2&format=${format}`;
  
    const res = await fetch(url);
    const data: HotPepperResponse = await res.json();
  
    return data.results.shop.map((shop) => ({ name: shop.name, urls: { pc: shop.urls.pc } }));
  };
  
  const About = async () => {
    const users = await fetchUsers();
  
    return (
      <>
        <ul>
          {users.map((user, i) => (
            <ul key={i}>
              <li>{user.name}</li> 
              <li>URL: {user.urls.pc}</li> 
            </ul>
          ))}
        </ul>
      </>
    );
  };
  
  export default About;
  