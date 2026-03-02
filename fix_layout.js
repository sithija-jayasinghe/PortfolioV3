const fs = require('fs');

let code = fs.readFileSync('src/app/layout.tsx', 'utf8');

code = code.replace('import "./globals.css";', 'import "./globals.css";\nimport CustomCursor from "@/components/CustomCursor";\nimport PageTransition from "@/components/PageTransition";');

code = code.replace('{children}', '<CustomCursor />\n        <PageTransition>\n          {children}\n        </PageTransition>');

fs.writeFileSync('src/app/layout.tsx', code);