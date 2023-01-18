import apiArticles from "./apiArticles";
import ArticleCard from "../ArticleCard/ArticleCard";

function InjectArticles({ category = 0 }) {
  let data = apiArticles[category];
  return data.map((element) => {
    return (
      <li className="slider-li">
        <ArticleCard
          image={element.image}
          logo1={element.logo1}
          logo2={element.logo2}
          title={element.title}
          description={element.description}
          link={element.link}
          position={element.position}
        />
      </li>
    );
  });
}

export default InjectArticles;
