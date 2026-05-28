import { useSelector } from "react-redux";

import { selectAllCategories } from "../selectors/selectors";

function CategorySelector({ selectedCategory, setSelectedCategory }) {
  const categories = useSelector(selectAllCategories);

  return (
    <div>
      <h2>Categories</h2>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(Number(e.target.value))}
      >
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategorySelector;
