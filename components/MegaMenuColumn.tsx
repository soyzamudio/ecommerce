import { MegaMenuColumn } from "@lib/interfaces";
import MegaMenuItem from "./MegaMenuItem";

const MegaMenuColumn = ({ header, items }: MegaMenuColumn) => {
  return (
    <div className="flex flex-col">
      {header && (
        <h1 className="font-bold p-2 -mx-2 uppercase tracking-wider text-gray-500 text-sm">
          {header}
        </h1>
      )}
      <div className="flex flex-col">
        {items?.map((item, key) => (
          <MegaMenuItem
            title={item.title}
            description={item.description}
            href={item.href}
            key={key}
          />
        ))}
      </div>
    </div>
  );
};

export default MegaMenuColumn;
