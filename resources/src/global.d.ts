// import type noUiSlider from "nouislider";
import type { IStaticMethods } from "preline/dist";

declare global {
    interface Window {
        // Optional third-party libraries
      a//  _: typeof import("lodash");
      a//  $: typeof import("jquery");
      a//  jQuery: typeof import("jquery");
      a//  DataTable: typeof $.fn.dataTable;
      a//  Dropzone: typeof import("dropzone");
      a//  noUiSlider: typeof noUiSlider;
      a//  VanillaCalendarPro: typeof import("vanilla-calendar-pro");

        // Preline UI
        HSStaticMethods: IStaticMethods;
    }
}

export {};
