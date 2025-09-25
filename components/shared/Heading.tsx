import React from "react";
import Typography from "./Typography";

type HeadingProps = {
   variant?: "h1" | "h2" | "h3" | "base" | "small";
   weight?: "bold" | "light" | "lighter";
   element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
   hidden?: boolean;
   className?: string;
   children: React.ReactNode;
   style?: "underline" | "underline-always";
};

export const HeadingEl = ({
   element,
   hidden,
   className,
   children,
}: Pick<HeadingProps, "element" | "children" | "hidden" | "className">) => {
   const classes = `${className ?? ""} ${hidden ? "size-0 invisible" : ""}`;

   switch (element) {
      case "h1":
         return <h1 className={classes}>{children}</h1>;
      case "h2":
         return <h2 className={classes}>{children}</h2>;
      case "h3":
         return <h3 className={classes}>{children}</h3>;
      case "h4":
         return <h4 className={classes}>{children}</h4>;
      case "h5":
         return <h5 className={classes}>{children}</h5>;
      case "h6":
         return <h6 className={classes}>{children}</h6>;

      default:
         return <h1 className={classes}>{children}</h1>;
   }
};

const Heading = ({
   element,
   variant,
   weight,
   hidden,
   className,
   children,
   style,
}: HeadingProps) => {
   return (
      <HeadingEl element={element} hidden={hidden} className={className}>
         <Typography
            variant={variant ?? "base"}
            weight={weight ?? undefined}
            className={`relative ${className}`}
         >
            {children}

            {style === "underline" || style === "underline-always" ? (
               <div
                  className={`${
                     style === "underline" ? "hidden lg:block" : "block"
                  } absolute right-0 bottom-0 h-[2px] w-[80px] bg-primary-500`}
               />
            ) : null}
         </Typography>
      </HeadingEl>
   );
};

export default Heading;
