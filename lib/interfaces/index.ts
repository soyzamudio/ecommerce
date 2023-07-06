export interface MegaMenu {
    columns: MegaMenuColumn[];
  }
  
  export interface MegaMenuColumn {
    header?: string | null;
    items: MegaMenuItem[];
  }
  
  export interface MegaMenuItem {
    title: string;
    description?: string;
    href?: string;
  }
  
  export interface CategoryTree {
    header: string;
    items: CategoryTreeItem[];
  }
  
  export interface CategoryTreeItem {
    label: string;
    value: string;
  }
  