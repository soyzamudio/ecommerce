import { MegaMenu } from "@lib/interfaces";
import MegaMenuColumn from "./MegaMenuColumn";

const MegaMenu = ({ columns }: MegaMenu) => {
  return (
    <div
      className={`absolute top-full -left-4 group-hover:translate-y-0 -translate-y-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 ease-in-out group-hover:transform z-50 ${
        columns.length > 1 ? "min-w-[850px]" : "min-w-[250px]"
      } transform`}
    >
      <div className="relative top-6 p-6 rounded-lg shadow-xl w-full bg-white">
        <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 left-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[1.5rem] duration-500 ease-in-out rounded-sm"></div>
        <div className="relative z-10">
          <div
            className={`grid ${
              columns.length > 1 ? "grid-cols-menu" : "grid-cols-1"
            } gap-12`}
          >
            {columns?.map((item, key) => (
              <MegaMenuColumn
                header={item.header ? item.header : null}
                items={item.items}
                key={key}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
