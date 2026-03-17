import { motion } from "framer-motion";

const angularCode = `@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.html',
  styleUrls: ['./course-list.scss']
})
export class CourseListComponent
  implements OnInit {

  courses$: Observable<Course[]>;
  loading = signal(false);

  constructor(
    private courseService: CourseService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.courses$ = this.courseService
      .getAll()
      .pipe(
        tap(() => this.loading.set(false)),
        catchError(this.handleError)
      );
  }
}`;

const dotnetCode = `[ApiController]
[Route("api/[controller]")]
public class CoursesController
  : ControllerBase
{
  private readonly ICourseRepo _repo;
  private readonly IMapper _mapper;

  public CoursesController(
    ICourseRepo repo,
    IMapper mapper)
  {
    _repo = repo;
    _mapper = mapper;
  }

  [HttpGet]
  [Authorize(Roles = "Admin,Student")]
  public async Task<IActionResult>
    GetAll([FromQuery] PaginationDto dto)
  {
    var result = await _repo
      .GetPagedAsync(dto);
    return Ok(_mapper.Map
      <PagedResult<CourseDto>>(result));
  }
}`;

const highlightSyntax = (code: string, lang: "angular" | "dotnet") => {
  const keywords =
    lang === "angular"
      ? ["export", "class", "implements", "constructor", "private", "this", "const", "void", "return", "import", "from"]
      : ["public", "private", "class", "async", "await", "return", "var", "new"];

  const decorators = lang === "angular" ? ["@Component", "@Injectable"] : ["[ApiController]", "[Route", "[HttpGet]", "[Authorize", "[FromQuery]"];
  const types =
    lang === "angular"
      ? ["Observable", "OnInit", "CourseService", "AuthService", "Course", "signal"]
      : ["Task", "IActionResult", "ICourseRepo", "IMapper", "PaginationDto", "CourseDto", "PagedResult", "ControllerBase"];

  return code.split("\n").map((line, i) => {
    let processed = line;

    // Decorators / attributes
    decorators.forEach((d) => {
      if (processed.includes(d)) {
        const escaped = d.replace(/[[\]()]/g, "\\$&");
        processed = processed.replace(new RegExp(escaped, "g"), `<span class="text-yellow-400">${d}</span>`);
      }
    });

    // Strings
    processed = processed.replace(/(["'`])([^"'`]*)\1/g, '<span class="text-emerald-400">$1$2$1</span>');

    // Types
    types.forEach((t) => {
      processed = processed.replace(new RegExp(`\\b${t}\\b`, "g"), `<span class="text-cyan-300">${t}</span>`);
    });

    // Keywords
    keywords.forEach((kw) => {
      processed = processed.replace(new RegExp(`\\b${kw}\\b`, "g"), `<span class="text-purple-400">${kw}</span>`);
    });

    return (
      <div key={i} className="flex">
        <span className="text-gray-600 w-6 text-right mr-3 select-none text-[10px]">{i + 1}</span>
        <span dangerouslySetInnerHTML={{ __html: processed }} />
      </div>
    );
  });
};

const CodeSnippet = () => {
  return (
    <>
      {/* Angular snippet - left side */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute left-4 top-1/2 -translate-y-1/2 hidden xl:block"
      >
        <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800/60 rounded-lg p-3 max-w-[260px] shadow-xl shadow-black/30">
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-2 h-2 rounded-full bg-red-500/70" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
            <div className="w-2 h-2 rounded-full bg-green-500/70" />
            <span className="ml-2 text-[9px] text-gray-500 font-mono">course-list.component.ts</span>
          </div>
          <pre className="text-[9px] leading-[14px] font-mono text-gray-400 overflow-hidden">
            {highlightSyntax(angularCode, "angular")}
          </pre>
          <div className="mt-2 flex items-center gap-1">
            <div className="w-3 h-3 rounded-sm bg-red-600 flex items-center justify-center">
              <span className="text-white text-[6px] font-bold">A</span>
            </div>
            <span className="text-[8px] text-gray-500 font-mono">Angular + TypeScript</span>
          </div>
        </div>
      </motion.div>

      {/* .NET snippet - right side */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute right-4 top-1/2 -translate-y-1/2 hidden xl:block"
      >
        <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800/60 rounded-lg p-3 max-w-[260px] shadow-xl shadow-black/30">
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-2 h-2 rounded-full bg-red-500/70" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
            <div className="w-2 h-2 rounded-full bg-green-500/70" />
            <span className="ml-2 text-[9px] text-gray-500 font-mono">CoursesController.cs</span>
          </div>
          <pre className="text-[9px] leading-[14px] font-mono text-gray-400 overflow-hidden">
            {highlightSyntax(dotnetCode, "dotnet")}
          </pre>
          <div className="mt-2 flex items-center gap-1">
            <div className="w-3 h-3 rounded-sm bg-purple-600 flex items-center justify-center">
              <span className="text-white text-[6px] font-bold">#</span>
            </div>
            <span className="text-[8px] text-gray-500 font-mono">.NET 8 Web API</span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CodeSnippet;
