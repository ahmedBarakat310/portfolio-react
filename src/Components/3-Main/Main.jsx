import { useEffect, useState } from "react";
import { motion,AnimatePresence } from "framer-motion";
import "./main.css";
// import restImg from './resturant.jpg'

const myProjects = [
  {
    projectName: "hoobank-react",
    category: ["react", "tailwind", "all"],
    projectId: 1,
    description: "lorem",
    link:'https://ahmedbarakat310.github.io/hoobank-react/',
    
    projectImg:'./image/hoobank.jpg'
  },
  {
    projectName: "ai-react",
    category: ["react", "all"],
    projectId: 2,
    description: "lorem",
    link:'https://ahmedbarakat310.github.io/AiWebsite-React/',
    
    projectImg:'./image/aiproject.jpg'


  },
  {
    projectName: "resturant-react",
    category: ["react", "all"],
    projectId: 3,
    description: "lorem",
    link:'https://ahmedbarakat310.github.io/Drinks-Resturant/',
  
    projectImg:'./image/resturant.jpg'


  },
  {
    projectName: "dashboard-react",
    category: ["react",'tailwind', "all"],
    projectId: 4,
    description: "lorem",
    link:'https://ahmedbarakat310.github.io/dashboard-react/',
  
    projectImg:'./image/dashboard.jpg'


  },
  {
    projectName: "Ecommerce",
    category: ['javascript', "all"],
    projectId: 5,
    description: "lorem",
    link:'https://ahmedbarakat310.github.io/eccomerce-javascript/',
  
    projectImg:'./image/ecommercejs.jpg'


  },
  {
    projectName: "Gemini-clone",
    category: ['react', "all"],
    projectId: 22,
    description: "lorem",
    link:'https://ahmedbarakat310.github.io/Gemini-clone/',
  
    projectImg:'./image/gemini.jpg'


  },
  {
    projectName: "Coffe Shop",
    category: ['javascript', "all"],
    projectId: 6,
    description: "lorem",
    link:'https://ahmedbarakat310.github.io/coffe-shop/',
    
    projectImg:'./image/coffe.jpg'


  },
  {
    projectName: "Watches Store ",
    category: ['javascript', "all"],
    projectId: 7,
    description: "lorem",
    link:'https://ahmedbarakat310.github.io/watches-project/',
    
    projectImg:'./image/watches.jpg'


  },
  {
    projectName: "Gym Website ",
    category: ['javascript', "all"],
    projectId: 8,
    description: "lorem",
    link:'',
    
    projectImg:'./image/gymwebsite.jpg'


  },
  {
    projectName: "Dashboard",
    category: ['htmlandcss', "all"],
    projectId: 9,
    description: "lorem",
    link:'https://ahmedbarakat310.github.io/dashboard/',
   
    projectImg:'./image/dashboardHtml.jpg'


  },
 
  {
    projectName: "kasper",
    category: ['htmlandcss', "all"],
    projectId: 10,
    description: "lorem",
    link:'https://ahmedbarakat310.github.io/kasper/',

    projectImg:'./image/kasper.jpg'


  },
  {
    projectName: "Network Project",
    category: ['javascript', "all"],
    projectId: 11,
    description: "lorem",
    link:'https://ahmedbarakat310.github.io/kasper/',
    
    projectImg:'./image/networkProject.jpg'


  },
  {
    projectName: "Leon Project",
    category: ['htmlandcss', "all"],
    projectId: 12,
    description: "lorem",
    link:'https://ahmedbarakat310.github.io/leon/',
  
    projectImg:'./image/leon.jpg'

  },
  
  {
    projectName: "Crud Project",
    category: ['javascript', "all"],
    projectId: 13,
    description: "lorem",
    link:'https://ahmedbarakat310.github.io/crud/',

    projectImg:'./image/crudjs.jpg'


  },
  {
    projectName: "Random Password",
    category: ['javascript', "all"],
    projectId: 14,
    description: "lorem",
    link:'https://ahmedbarakat310.github.io/random-password/',
 
    projectImg:'./image/randompass.jpg'


  },
  {
    projectName: "Quiz App",
    category: ['javascript', "all"],
    projectId: 15,
    description: "lorem",
    link:'https://ahmedbarakat310.github.io/quiz-app/',
   
    projectImg:'./image/quiz.jpg'

  },
  {
    projectName: "To-Do-List",
    category: ['javascript', "all"],
    projectId: 16,
    description: "lorem",
    link:'https://ahmedbarakat310.github.io/to-do-list/',
 
    projectImg:'./image/todolist.jpg'


  },
  {
    projectName: "Stop Watch",
    category: ['javascript', "all"],
    projectId: 17,
    description: "lorem",
    link:'https://ahmedbarakat310.github.io/newStopWatch/',
   
    projectImg:'./image/stopwatch.jpg'


  },
  {
    projectName: "Calc project",
    category: ['javascript', "all"],
    projectId: 18,
    description: "lorem",
    link:'https://ahmedbarakat310.github.io/newCalc/',
  
    projectImg:'./image/calculator.jpg'

  },
  {
    projectName: "Execl Conventer",
    category: ['javascript', "all"],
    projectId: 19,
    description: "lorem",
    link:'https://ahmedbarakat310.github.io/execl-conventer/',
  
    projectImg:'./image/execl.jpg'

  },
  {
    projectName: "Tecnical Documintaion",
    category: ['javascript', "all"],
    projectId: 20,
    description: "lorem",
    link:'https://ahmedbarakat310.github.io/technical-documentation-main/',
  
    projectImg:'./image/tecnicaldouc.jpg'


  },
  {
    projectName: "My Card",
    category: ['javascript', "all"],
    projectId: 21,
    description: "lorem",
    link:'https://ahmedbarakat310.github.io/my-card/',

    projectImg:'./image/card.jpg'


  },
 
];
const Main = () => {

  const [pageSize, setpageSize] = useState(6)
  const [currentPage, setcurrentPage] = useState(1)
  const indexOfLastProject=currentPage * pageSize;
  const indexOfFirstProject=indexOfLastProject - pageSize
  const [activeButton, setActiveButton] = useState(null);
  const [arr, setarr] = useState(myProjects);
  const handelClick = (buttonCategory) => {
    setActiveButton(buttonCategory);
    const newArr = myProjects.filter((item) => {
      const specItem = item.category.filter((spec) => {
        return spec === buttonCategory;
        
        
      });
      return specItem.toString() === buttonCategory;
    });
    
    
    setarr(newArr);
  };
  let arrPage=[]
  for (let i = 1; i <= Math.ceil(arr.length / 6); i++) {
    arrPage.push(i)
    
  }
  const handelPagination=(pageNubmer)=>{
    setcurrentPage(pageNubmer)


  }
  useEffect(() => {
    handelClick("all");
    
    
  }, []);
  useEffect(() => {
  setcurrentPage(1)
  setpageSize(6)
    
    
  }, [activeButton]);

  return <>
   <main className="flex" >
      <section className="flex  left-section">
        <button id="projects"
          onClick={() => {
            handelClick("all");
          }}
          className={activeButton === "all" ? "active" : null}
        >
          all projects
        </button>
        <button
          onClick={() => {
            handelClick("react");
          }}
          className={activeButton === "react" ? "active" : null}
        >
          React
        </button>

        <button
          onClick={() => {
            handelClick("javascript");
          }}
          className={activeButton === "javascript" ? "active" : null}
        >
          javascript
        </button>
        <button
          onClick={() => {
            handelClick("tailwind");
          }}
          className={activeButton === "tailwind" ? "active" : null}
        >
          TailwindCss
        </button>
        <button
          onClick={() => {
            handelClick("htmlandcss");
          }}
          className={activeButton === "htmlandcss" ? "active" : null}
        >
          Html & Css
        </button>
      </section>

      <section className=" flex right-section">
        <AnimatePresence>

        {arr.slice(indexOfFirstProject,indexOfLastProject).map((item) => {
          return <>
          
            <motion.article
            
            layout
              initial={{ transform: "scale(0.4)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ damping: 8, type: "spring", stiffness: 50 }}
              key={item.projectId}
              className="card"
            >
              <img width={266} src={`${item.projectImg}`} alt="" />
              
              <div style={{ width: "266px" }} className="box">
                <h1 className="title">{item.projectName} </h1>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                  tempore dolor in, accusantium laudantium accusamus.
                </p>

                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div >
                    <a className="icon-link" href={item.link}></a>
                      
                    </div>
                    <div >
                      <a className="icon-github" href={item.link}></a>
                    </div>
                  </div>

                  <a className="link flex" href={item.link}>
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a>
                </div>
              </div>
            </motion.article>
          </>
        })}
        </AnimatePresence>
          
      
       
      </section>
      
    </main>
    <div className="flex   pagination-container" >
        {arrPage.map((item)=>{
            return <div onClick={()=>handelPagination(item)} key={item} className={`page-item ${currentPage=== item ?'active':null}`} >
              <button  >{item}</button>
            </div>
          })}
        </div>
      
  </>
};

export default Main;
