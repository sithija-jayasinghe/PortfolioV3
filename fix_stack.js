const fs = require('fs');

let code = fs.readFileSync('src/components/Stack.tsx', 'utf-8');

const replacement = `<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="h-full"
            >
              <div className="h-full flex flex-col">
              <SpotlightCard className="h-full flex flex-col items-start justify-start">
                <h3 className="text-sm w-full font-semibold uppercase tracking-widest text-zinc-500 border-b border-zinc-900/50 pb-4 mb-6 relative z-20">
                  {category}
                </h3>
                <div className="flex w-full flex-wrap gap-4 relative z-20">
                  {items.map((skill) => (
                    <Magnetic key={skill}>
                      <div className="flex items-center gap-2 px-5 py-2.5 bg-zinc-950/50 border border-zinc-800 rounded-lg hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all cursor-none group hover:shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)]">
                        <span className="text-zinc-300 font-medium text-sm md:text-base group-hover:text-emerald-400 transition-colors pointer-events-none">{skill}</span>
                      </div>
                    </Magnetic>
                  ))}
                </div>
              </SpotlightCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>`;

code = code.replace(/<div className="grid grid-cols-1 md:grid-cols-2 gap-12">[\s\S]+?<\/div>\s+<\/div>\s+<\/section>/m, replacement);

fs.writeFileSync('src/components/Stack.tsx', code);