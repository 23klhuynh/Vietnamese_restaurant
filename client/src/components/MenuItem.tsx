interface MenuItemProps {
  title: string;
  description: string;
  price: number;
}

function MenuItem({ title, description, price }: MenuItemProps) {
  return (
    <div className="menu__item">
      <h1 className="menu__item-header text-md md:text-lg lg:text-xl xl:text-2xl">
        {title}
      </h1>
      <p className="menu__item-description text-sm md:text-md lg:text-lg text-gray-500">
        {description}
      </p>
      <p className="menu__item-price text-sm md:text-md lg:text-lg text-gray-500">
        ${price}
      </p>
    </div>
  );
}

export default MenuItem;
