window.BENCHMARK_DATA = {
  "lastUpdate": 1771877280568,
  "repoUrl": "https://github.com/erock530/gocloak",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "56282917+erock530@users.noreply.github.com",
            "name": "Eric",
            "username": "erock530"
          },
          "committer": {
            "email": "56282917+erock530@users.noreply.github.com",
            "name": "Eric",
            "username": "erock530"
          },
          "distinct": true,
          "id": "e1d66b081c05049fb16d267a3e505884d0663f93",
          "message": "ci: set git identity for gh-pages init step\n\nConfigure user.name and user.email before commit to fix 'Author identity\nunknown' error when creating the gh-pages branch.\n\nCo-authored-by: Cursor <cursoragent@cursor.com>",
          "timestamp": "2026-02-21T05:22:32Z",
          "tree_id": "7f868490e023232d0bdb9ae18e06fe9904e8fbc3",
          "url": "https://github.com/erock530/gocloak/commit/e1d66b081c05049fb16d267a3e505884d0663f93"
        },
        "date": 1771651546163,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkLogin",
            "value": 33883018,
            "unit": "ns/op\t   78000 B/op\t     174 allocs/op",
            "extra": "33 times"
          },
          {
            "name": "BenchmarkLogin - ns/op",
            "value": 33883018,
            "unit": "ns/op",
            "extra": "33 times"
          },
          {
            "name": "BenchmarkLogin - B/op",
            "value": 78000,
            "unit": "B/op",
            "extra": "33 times"
          },
          {
            "name": "BenchmarkLogin - allocs/op",
            "value": 174,
            "unit": "allocs/op",
            "extra": "33 times"
          },
          {
            "name": "BenchmarkLogin",
            "value": 35216541,
            "unit": "ns/op\t   68251 B/op\t     175 allocs/op",
            "extra": "34 times\n2 procs"
          },
          {
            "name": "BenchmarkLogin - ns/op",
            "value": 35216541,
            "unit": "ns/op",
            "extra": "34 times\n2 procs"
          },
          {
            "name": "BenchmarkLogin - B/op",
            "value": 68251,
            "unit": "B/op",
            "extra": "34 times\n2 procs"
          },
          {
            "name": "BenchmarkLogin - allocs/op",
            "value": 175,
            "unit": "allocs/op",
            "extra": "34 times\n2 procs"
          },
          {
            "name": "BenchmarkLoginParallel",
            "value": 33812878,
            "unit": "ns/op\t   81489 B/op\t     175 allocs/op",
            "extra": "32 times"
          },
          {
            "name": "BenchmarkLoginParallel - ns/op",
            "value": 33812878,
            "unit": "ns/op",
            "extra": "32 times"
          },
          {
            "name": "BenchmarkLoginParallel - B/op",
            "value": 81489,
            "unit": "B/op",
            "extra": "32 times"
          },
          {
            "name": "BenchmarkLoginParallel - allocs/op",
            "value": 175,
            "unit": "allocs/op",
            "extra": "32 times"
          },
          {
            "name": "BenchmarkGetGroups",
            "value": 1201641,
            "unit": "ns/op\t   36433 B/op\t     100 allocs/op",
            "extra": "1050 times"
          },
          {
            "name": "BenchmarkGetGroups - ns/op",
            "value": 1201641,
            "unit": "ns/op",
            "extra": "1050 times"
          },
          {
            "name": "BenchmarkGetGroups - B/op",
            "value": 36433,
            "unit": "B/op",
            "extra": "1050 times"
          },
          {
            "name": "BenchmarkGetGroups - allocs/op",
            "value": 100,
            "unit": "allocs/op",
            "extra": "1050 times"
          },
          {
            "name": "BenchmarkGetGroups",
            "value": 1085577,
            "unit": "ns/op\t   36434 B/op\t     100 allocs/op",
            "extra": "1033 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroups - ns/op",
            "value": 1085577,
            "unit": "ns/op",
            "extra": "1033 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroups - B/op",
            "value": 36434,
            "unit": "B/op",
            "extra": "1033 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroups - allocs/op",
            "value": 100,
            "unit": "allocs/op",
            "extra": "1033 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsFull",
            "value": 1037028,
            "unit": "ns/op\t   37598 B/op\t     120 allocs/op",
            "extra": "1130 times"
          },
          {
            "name": "BenchmarkGetGroupsFull - ns/op",
            "value": 1037028,
            "unit": "ns/op",
            "extra": "1130 times"
          },
          {
            "name": "BenchmarkGetGroupsFull - B/op",
            "value": 37598,
            "unit": "B/op",
            "extra": "1130 times"
          },
          {
            "name": "BenchmarkGetGroupsFull - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "1130 times"
          },
          {
            "name": "BenchmarkGetGroupsFull",
            "value": 980934,
            "unit": "ns/op\t   37955 B/op\t     120 allocs/op",
            "extra": "1162 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsFull - ns/op",
            "value": 980934,
            "unit": "ns/op",
            "extra": "1162 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsFull - B/op",
            "value": 37955,
            "unit": "B/op",
            "extra": "1162 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsFull - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "1162 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsBrief",
            "value": 878879,
            "unit": "ns/op\t   37928 B/op\t     120 allocs/op",
            "extra": "1350 times"
          },
          {
            "name": "BenchmarkGetGroupsBrief - ns/op",
            "value": 878879,
            "unit": "ns/op",
            "extra": "1350 times"
          },
          {
            "name": "BenchmarkGetGroupsBrief - B/op",
            "value": 37928,
            "unit": "B/op",
            "extra": "1350 times"
          },
          {
            "name": "BenchmarkGetGroupsBrief - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "1350 times"
          },
          {
            "name": "BenchmarkGetGroupsBrief",
            "value": 923713,
            "unit": "ns/op\t   38711 B/op\t     120 allocs/op",
            "extra": "1252 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsBrief - ns/op",
            "value": 923713,
            "unit": "ns/op",
            "extra": "1252 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsBrief - B/op",
            "value": 38711,
            "unit": "B/op",
            "extra": "1252 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsBrief - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "1252 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroup",
            "value": 958769,
            "unit": "ns/op\t   37976 B/op\t     137 allocs/op",
            "extra": "1154 times"
          },
          {
            "name": "BenchmarkGetGroup - ns/op",
            "value": 958769,
            "unit": "ns/op",
            "extra": "1154 times"
          },
          {
            "name": "BenchmarkGetGroup - B/op",
            "value": 37976,
            "unit": "B/op",
            "extra": "1154 times"
          },
          {
            "name": "BenchmarkGetGroup - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "1154 times"
          },
          {
            "name": "BenchmarkGetGroup",
            "value": 992752,
            "unit": "ns/op\t   37926 B/op\t     137 allocs/op",
            "extra": "1167 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroup - ns/op",
            "value": 992752,
            "unit": "ns/op",
            "extra": "1167 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroup - B/op",
            "value": 37926,
            "unit": "B/op",
            "extra": "1167 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroup - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "1167 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupByPath",
            "value": 885255,
            "unit": "ns/op\t   37662 B/op\t     123 allocs/op",
            "extra": "1248 times"
          },
          {
            "name": "BenchmarkGetGroupByPath - ns/op",
            "value": 885255,
            "unit": "ns/op",
            "extra": "1248 times"
          },
          {
            "name": "BenchmarkGetGroupByPath - B/op",
            "value": 37662,
            "unit": "B/op",
            "extra": "1248 times"
          },
          {
            "name": "BenchmarkGetGroupByPath - allocs/op",
            "value": 123,
            "unit": "allocs/op",
            "extra": "1248 times"
          },
          {
            "name": "BenchmarkGetGroupByPath",
            "value": 936315,
            "unit": "ns/op\t   38075 B/op\t     123 allocs/op",
            "extra": "1124 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupByPath - ns/op",
            "value": 936315,
            "unit": "ns/op",
            "extra": "1124 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupByPath - B/op",
            "value": 38075,
            "unit": "B/op",
            "extra": "1124 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupByPath - allocs/op",
            "value": 123,
            "unit": "allocs/op",
            "extra": "1124 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56282917+erock530@users.noreply.github.com",
            "name": "eric",
            "username": "erock530"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "74f1c9028bf1d82b9c4f71d82f5ed7652fe7b8c9",
          "message": "docs: update README and add LICENSE reference; ci: golangci-lint v2, separate lint/tests jobs, publish-benchmarks on push to main\n\n* updated README\n\n* updated go ver 1.25.7\n\n* updated golangci-lint version to support go 1.25\n\n* updated golangci-lint version to support go 1.25\n\n* updated golangci-lint version to support go 1.25\n\n* updated golangci-lint settings\n\n* updated golangci-lint to latest\n\n* updated golangci-lint to meet v2 requirements\n\n* fix(ci): remove gofmt/goimports from linters for golangci-lint v2\n\n* fix(ci): use linters default none to match pre-v2 linter set\n\n* fix(ci): exclude gosec G117 for Keycloak API secret fields\n\n* ci: run tests only on pull_request, lint on push and PR\n\n* ci: run benchmark publish only on push to main with contents: write\n\n* fix(ci): remove no-op dupl from _test.go exclusion rule\n\n* docs: point License section to LICENSE and credit original repo",
          "timestamp": "2026-02-23T12:11:52-06:00",
          "tree_id": "b5aa240d4986ffa19e85eef615bae51ef44758db",
          "url": "https://github.com/erock530/gocloak/commit/74f1c9028bf1d82b9c4f71d82f5ed7652fe7b8c9"
        },
        "date": 1771870491556,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkLogin",
            "value": 33826744,
            "unit": "ns/op\t   74109 B/op\t     173 allocs/op",
            "extra": "36 times"
          },
          {
            "name": "BenchmarkLogin - ns/op",
            "value": 33826744,
            "unit": "ns/op",
            "extra": "36 times"
          },
          {
            "name": "BenchmarkLogin - B/op",
            "value": 74109,
            "unit": "B/op",
            "extra": "36 times"
          },
          {
            "name": "BenchmarkLogin - allocs/op",
            "value": 173,
            "unit": "allocs/op",
            "extra": "36 times"
          },
          {
            "name": "BenchmarkLogin",
            "value": 33870454,
            "unit": "ns/op\t   80135 B/op\t     175 allocs/op",
            "extra": "34 times\n2 procs"
          },
          {
            "name": "BenchmarkLogin - ns/op",
            "value": 33870454,
            "unit": "ns/op",
            "extra": "34 times\n2 procs"
          },
          {
            "name": "BenchmarkLogin - B/op",
            "value": 80135,
            "unit": "B/op",
            "extra": "34 times\n2 procs"
          },
          {
            "name": "BenchmarkLogin - allocs/op",
            "value": 175,
            "unit": "allocs/op",
            "extra": "34 times\n2 procs"
          },
          {
            "name": "BenchmarkLoginParallel",
            "value": 32150701,
            "unit": "ns/op\t   83267 B/op\t     175 allocs/op",
            "extra": "34 times"
          },
          {
            "name": "BenchmarkLoginParallel - ns/op",
            "value": 32150701,
            "unit": "ns/op",
            "extra": "34 times"
          },
          {
            "name": "BenchmarkLoginParallel - B/op",
            "value": 83267,
            "unit": "B/op",
            "extra": "34 times"
          },
          {
            "name": "BenchmarkLoginParallel - allocs/op",
            "value": 175,
            "unit": "allocs/op",
            "extra": "34 times"
          },
          {
            "name": "BenchmarkGetGroups",
            "value": 1178922,
            "unit": "ns/op\t   35866 B/op\t     100 allocs/op",
            "extra": "992 times"
          },
          {
            "name": "BenchmarkGetGroups - ns/op",
            "value": 1178922,
            "unit": "ns/op",
            "extra": "992 times"
          },
          {
            "name": "BenchmarkGetGroups - B/op",
            "value": 35866,
            "unit": "B/op",
            "extra": "992 times"
          },
          {
            "name": "BenchmarkGetGroups - allocs/op",
            "value": 100,
            "unit": "allocs/op",
            "extra": "992 times"
          },
          {
            "name": "BenchmarkGetGroups",
            "value": 1177794,
            "unit": "ns/op\t   36889 B/op\t     100 allocs/op",
            "extra": "940 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroups - ns/op",
            "value": 1177794,
            "unit": "ns/op",
            "extra": "940 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroups - B/op",
            "value": 36889,
            "unit": "B/op",
            "extra": "940 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroups - allocs/op",
            "value": 100,
            "unit": "allocs/op",
            "extra": "940 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsFull",
            "value": 1085277,
            "unit": "ns/op\t   38090 B/op\t     120 allocs/op",
            "extra": "1172 times"
          },
          {
            "name": "BenchmarkGetGroupsFull - ns/op",
            "value": 1085277,
            "unit": "ns/op",
            "extra": "1172 times"
          },
          {
            "name": "BenchmarkGetGroupsFull - B/op",
            "value": 38090,
            "unit": "B/op",
            "extra": "1172 times"
          },
          {
            "name": "BenchmarkGetGroupsFull - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "1172 times"
          },
          {
            "name": "BenchmarkGetGroupsFull",
            "value": 1034501,
            "unit": "ns/op\t   37714 B/op\t     120 allocs/op",
            "extra": "1180 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsFull - ns/op",
            "value": 1034501,
            "unit": "ns/op",
            "extra": "1180 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsFull - B/op",
            "value": 37714,
            "unit": "B/op",
            "extra": "1180 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsFull - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "1180 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsBrief",
            "value": 980582,
            "unit": "ns/op\t   36744 B/op\t     120 allocs/op",
            "extra": "1354 times"
          },
          {
            "name": "BenchmarkGetGroupsBrief - ns/op",
            "value": 980582,
            "unit": "ns/op",
            "extra": "1354 times"
          },
          {
            "name": "BenchmarkGetGroupsBrief - B/op",
            "value": 36744,
            "unit": "B/op",
            "extra": "1354 times"
          },
          {
            "name": "BenchmarkGetGroupsBrief - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "1354 times"
          },
          {
            "name": "BenchmarkGetGroupsBrief",
            "value": 915206,
            "unit": "ns/op\t   38558 B/op\t     120 allocs/op",
            "extra": "1261 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsBrief - ns/op",
            "value": 915206,
            "unit": "ns/op",
            "extra": "1261 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsBrief - B/op",
            "value": 38558,
            "unit": "B/op",
            "extra": "1261 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsBrief - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "1261 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroup",
            "value": 953563,
            "unit": "ns/op\t   37849 B/op\t     137 allocs/op",
            "extra": "1140 times"
          },
          {
            "name": "BenchmarkGetGroup - ns/op",
            "value": 953563,
            "unit": "ns/op",
            "extra": "1140 times"
          },
          {
            "name": "BenchmarkGetGroup - B/op",
            "value": 37849,
            "unit": "B/op",
            "extra": "1140 times"
          },
          {
            "name": "BenchmarkGetGroup - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "1140 times"
          },
          {
            "name": "BenchmarkGetGroup",
            "value": 1005906,
            "unit": "ns/op\t   37164 B/op\t     137 allocs/op",
            "extra": "1165 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroup - ns/op",
            "value": 1005906,
            "unit": "ns/op",
            "extra": "1165 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroup - B/op",
            "value": 37164,
            "unit": "B/op",
            "extra": "1165 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroup - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "1165 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupByPath",
            "value": 888979,
            "unit": "ns/op\t   36983 B/op\t     123 allocs/op",
            "extra": "1153 times"
          },
          {
            "name": "BenchmarkGetGroupByPath - ns/op",
            "value": 888979,
            "unit": "ns/op",
            "extra": "1153 times"
          },
          {
            "name": "BenchmarkGetGroupByPath - B/op",
            "value": 36983,
            "unit": "B/op",
            "extra": "1153 times"
          },
          {
            "name": "BenchmarkGetGroupByPath - allocs/op",
            "value": 123,
            "unit": "allocs/op",
            "extra": "1153 times"
          },
          {
            "name": "BenchmarkGetGroupByPath",
            "value": 918189,
            "unit": "ns/op\t   36708 B/op\t     123 allocs/op",
            "extra": "1122 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupByPath - ns/op",
            "value": 918189,
            "unit": "ns/op",
            "extra": "1122 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupByPath - B/op",
            "value": 36708,
            "unit": "B/op",
            "extra": "1122 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupByPath - allocs/op",
            "value": 123,
            "unit": "allocs/op",
            "extra": "1122 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56282917+erock530@users.noreply.github.com",
            "name": "eric",
            "username": "erock530"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f534e71897f5b55634a5c36e22f343b8110d3180",
          "message": "ci: run tests on push to non-main so release PR gets status (#4)\n\n* ci: run tests on push to non-main so release PR gets status\n\n* Update .github/workflows/go.yml",
          "timestamp": "2026-02-23T13:14:34-06:00",
          "tree_id": "9cef2bb4b6af29a3e71fc6f2cf39a84dc7702cb7",
          "url": "https://github.com/erock530/gocloak/commit/f534e71897f5b55634a5c36e22f343b8110d3180"
        },
        "date": 1771874234716,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkLogin",
            "value": 34904546,
            "unit": "ns/op\t   82041 B/op\t     173 allocs/op",
            "extra": "33 times"
          },
          {
            "name": "BenchmarkLogin - ns/op",
            "value": 34904546,
            "unit": "ns/op",
            "extra": "33 times"
          },
          {
            "name": "BenchmarkLogin - B/op",
            "value": 82041,
            "unit": "B/op",
            "extra": "33 times"
          },
          {
            "name": "BenchmarkLogin - allocs/op",
            "value": 173,
            "unit": "allocs/op",
            "extra": "33 times"
          },
          {
            "name": "BenchmarkLogin",
            "value": 34673697,
            "unit": "ns/op\t   90834 B/op\t     174 allocs/op",
            "extra": "33 times\n2 procs"
          },
          {
            "name": "BenchmarkLogin - ns/op",
            "value": 34673697,
            "unit": "ns/op",
            "extra": "33 times\n2 procs"
          },
          {
            "name": "BenchmarkLogin - B/op",
            "value": 90834,
            "unit": "B/op",
            "extra": "33 times\n2 procs"
          },
          {
            "name": "BenchmarkLogin - allocs/op",
            "value": 174,
            "unit": "allocs/op",
            "extra": "33 times\n2 procs"
          },
          {
            "name": "BenchmarkLoginParallel",
            "value": 34204428,
            "unit": "ns/op\t   75429 B/op\t     174 allocs/op",
            "extra": "33 times"
          },
          {
            "name": "BenchmarkLoginParallel - ns/op",
            "value": 34204428,
            "unit": "ns/op",
            "extra": "33 times"
          },
          {
            "name": "BenchmarkLoginParallel - B/op",
            "value": 75429,
            "unit": "B/op",
            "extra": "33 times"
          },
          {
            "name": "BenchmarkLoginParallel - allocs/op",
            "value": 174,
            "unit": "allocs/op",
            "extra": "33 times"
          },
          {
            "name": "BenchmarkGetGroups",
            "value": 1279300,
            "unit": "ns/op\t   35565 B/op\t     100 allocs/op",
            "extra": "868 times"
          },
          {
            "name": "BenchmarkGetGroups - ns/op",
            "value": 1279300,
            "unit": "ns/op",
            "extra": "868 times"
          },
          {
            "name": "BenchmarkGetGroups - B/op",
            "value": 35565,
            "unit": "B/op",
            "extra": "868 times"
          },
          {
            "name": "BenchmarkGetGroups - allocs/op",
            "value": 100,
            "unit": "allocs/op",
            "extra": "868 times"
          },
          {
            "name": "BenchmarkGetGroups",
            "value": 1262622,
            "unit": "ns/op\t   35167 B/op\t     100 allocs/op",
            "extra": "984 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroups - ns/op",
            "value": 1262622,
            "unit": "ns/op",
            "extra": "984 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroups - B/op",
            "value": 35167,
            "unit": "B/op",
            "extra": "984 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroups - allocs/op",
            "value": 100,
            "unit": "allocs/op",
            "extra": "984 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsFull",
            "value": 1250065,
            "unit": "ns/op\t   38002 B/op\t     120 allocs/op",
            "extra": "996 times"
          },
          {
            "name": "BenchmarkGetGroupsFull - ns/op",
            "value": 1250065,
            "unit": "ns/op",
            "extra": "996 times"
          },
          {
            "name": "BenchmarkGetGroupsFull - B/op",
            "value": 38002,
            "unit": "B/op",
            "extra": "996 times"
          },
          {
            "name": "BenchmarkGetGroupsFull - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "996 times"
          },
          {
            "name": "BenchmarkGetGroupsFull",
            "value": 1204950,
            "unit": "ns/op\t   37363 B/op\t     120 allocs/op",
            "extra": "957 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsFull - ns/op",
            "value": 1204950,
            "unit": "ns/op",
            "extra": "957 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsFull - B/op",
            "value": 37363,
            "unit": "B/op",
            "extra": "957 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsFull - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "957 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsBrief",
            "value": 1045259,
            "unit": "ns/op\t   38453 B/op\t     120 allocs/op",
            "extra": "1105 times"
          },
          {
            "name": "BenchmarkGetGroupsBrief - ns/op",
            "value": 1045259,
            "unit": "ns/op",
            "extra": "1105 times"
          },
          {
            "name": "BenchmarkGetGroupsBrief - B/op",
            "value": 38453,
            "unit": "B/op",
            "extra": "1105 times"
          },
          {
            "name": "BenchmarkGetGroupsBrief - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "1105 times"
          },
          {
            "name": "BenchmarkGetGroupsBrief",
            "value": 980932,
            "unit": "ns/op\t   38176 B/op\t     120 allocs/op",
            "extra": "1209 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsBrief - ns/op",
            "value": 980932,
            "unit": "ns/op",
            "extra": "1209 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsBrief - B/op",
            "value": 38176,
            "unit": "B/op",
            "extra": "1209 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsBrief - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "1209 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroup",
            "value": 1063533,
            "unit": "ns/op\t   38237 B/op\t     137 allocs/op",
            "extra": "1065 times"
          },
          {
            "name": "BenchmarkGetGroup - ns/op",
            "value": 1063533,
            "unit": "ns/op",
            "extra": "1065 times"
          },
          {
            "name": "BenchmarkGetGroup - B/op",
            "value": 38237,
            "unit": "B/op",
            "extra": "1065 times"
          },
          {
            "name": "BenchmarkGetGroup - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "1065 times"
          },
          {
            "name": "BenchmarkGetGroup",
            "value": 1054097,
            "unit": "ns/op\t   38334 B/op\t     137 allocs/op",
            "extra": "1054 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroup - ns/op",
            "value": 1054097,
            "unit": "ns/op",
            "extra": "1054 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroup - B/op",
            "value": 38334,
            "unit": "B/op",
            "extra": "1054 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroup - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "1054 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupByPath",
            "value": 956700,
            "unit": "ns/op\t   37227 B/op\t     123 allocs/op",
            "extra": "1210 times"
          },
          {
            "name": "BenchmarkGetGroupByPath - ns/op",
            "value": 956700,
            "unit": "ns/op",
            "extra": "1210 times"
          },
          {
            "name": "BenchmarkGetGroupByPath - B/op",
            "value": 37227,
            "unit": "B/op",
            "extra": "1210 times"
          },
          {
            "name": "BenchmarkGetGroupByPath - allocs/op",
            "value": 123,
            "unit": "allocs/op",
            "extra": "1210 times"
          },
          {
            "name": "BenchmarkGetGroupByPath",
            "value": 997781,
            "unit": "ns/op\t   38680 B/op\t     123 allocs/op",
            "extra": "1141 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupByPath - ns/op",
            "value": 997781,
            "unit": "ns/op",
            "extra": "1141 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupByPath - B/op",
            "value": 38680,
            "unit": "B/op",
            "extra": "1141 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupByPath - allocs/op",
            "value": 123,
            "unit": "allocs/op",
            "extra": "1141 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "afd77289c293f533183d46ec6925a78f0c96e877",
          "message": "chore(main): release 1.0.2 (#3)",
          "timestamp": "2026-02-23T14:05:03-06:00",
          "tree_id": "3680145302fc21c96a6043980feab8b3b2b8a120",
          "url": "https://github.com/erock530/gocloak/commit/afd77289c293f533183d46ec6925a78f0c96e877"
        },
        "date": 1771877279768,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkLogin",
            "value": 33566734,
            "unit": "ns/op\t   74915 B/op\t     173 allocs/op",
            "extra": "34 times"
          },
          {
            "name": "BenchmarkLogin - ns/op",
            "value": 33566734,
            "unit": "ns/op",
            "extra": "34 times"
          },
          {
            "name": "BenchmarkLogin - B/op",
            "value": 74915,
            "unit": "B/op",
            "extra": "34 times"
          },
          {
            "name": "BenchmarkLogin - allocs/op",
            "value": 173,
            "unit": "allocs/op",
            "extra": "34 times"
          },
          {
            "name": "BenchmarkLogin",
            "value": 33429041,
            "unit": "ns/op\t   86030 B/op\t     176 allocs/op",
            "extra": "33 times\n2 procs"
          },
          {
            "name": "BenchmarkLogin - ns/op",
            "value": 33429041,
            "unit": "ns/op",
            "extra": "33 times\n2 procs"
          },
          {
            "name": "BenchmarkLogin - B/op",
            "value": 86030,
            "unit": "B/op",
            "extra": "33 times\n2 procs"
          },
          {
            "name": "BenchmarkLogin - allocs/op",
            "value": 176,
            "unit": "allocs/op",
            "extra": "33 times\n2 procs"
          },
          {
            "name": "BenchmarkLoginParallel",
            "value": 33580173,
            "unit": "ns/op\t   79667 B/op\t     174 allocs/op",
            "extra": "34 times"
          },
          {
            "name": "BenchmarkLoginParallel - ns/op",
            "value": 33580173,
            "unit": "ns/op",
            "extra": "34 times"
          },
          {
            "name": "BenchmarkLoginParallel - B/op",
            "value": 79667,
            "unit": "B/op",
            "extra": "34 times"
          },
          {
            "name": "BenchmarkLoginParallel - allocs/op",
            "value": 174,
            "unit": "allocs/op",
            "extra": "34 times"
          },
          {
            "name": "BenchmarkGetGroups",
            "value": 1134124,
            "unit": "ns/op\t   36240 B/op\t     100 allocs/op",
            "extra": "942 times"
          },
          {
            "name": "BenchmarkGetGroups - ns/op",
            "value": 1134124,
            "unit": "ns/op",
            "extra": "942 times"
          },
          {
            "name": "BenchmarkGetGroups - B/op",
            "value": 36240,
            "unit": "B/op",
            "extra": "942 times"
          },
          {
            "name": "BenchmarkGetGroups - allocs/op",
            "value": 100,
            "unit": "allocs/op",
            "extra": "942 times"
          },
          {
            "name": "BenchmarkGetGroups",
            "value": 1203990,
            "unit": "ns/op\t   35897 B/op\t     100 allocs/op",
            "extra": "932 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroups - ns/op",
            "value": 1203990,
            "unit": "ns/op",
            "extra": "932 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroups - B/op",
            "value": 35897,
            "unit": "B/op",
            "extra": "932 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroups - allocs/op",
            "value": 100,
            "unit": "allocs/op",
            "extra": "932 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsFull",
            "value": 1122497,
            "unit": "ns/op\t   38229 B/op\t     120 allocs/op",
            "extra": "1086 times"
          },
          {
            "name": "BenchmarkGetGroupsFull - ns/op",
            "value": 1122497,
            "unit": "ns/op",
            "extra": "1086 times"
          },
          {
            "name": "BenchmarkGetGroupsFull - B/op",
            "value": 38229,
            "unit": "B/op",
            "extra": "1086 times"
          },
          {
            "name": "BenchmarkGetGroupsFull - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "1086 times"
          },
          {
            "name": "BenchmarkGetGroupsFull",
            "value": 1078555,
            "unit": "ns/op\t   38422 B/op\t     120 allocs/op",
            "extra": "1089 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsFull - ns/op",
            "value": 1078555,
            "unit": "ns/op",
            "extra": "1089 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsFull - B/op",
            "value": 38422,
            "unit": "B/op",
            "extra": "1089 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsFull - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "1089 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsBrief",
            "value": 994842,
            "unit": "ns/op\t   37772 B/op\t     120 allocs/op",
            "extra": "1285 times"
          },
          {
            "name": "BenchmarkGetGroupsBrief - ns/op",
            "value": 994842,
            "unit": "ns/op",
            "extra": "1285 times"
          },
          {
            "name": "BenchmarkGetGroupsBrief - B/op",
            "value": 37772,
            "unit": "B/op",
            "extra": "1285 times"
          },
          {
            "name": "BenchmarkGetGroupsBrief - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "1285 times"
          },
          {
            "name": "BenchmarkGetGroupsBrief",
            "value": 945336,
            "unit": "ns/op\t   38219 B/op\t     120 allocs/op",
            "extra": "1285 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsBrief - ns/op",
            "value": 945336,
            "unit": "ns/op",
            "extra": "1285 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsBrief - B/op",
            "value": 38219,
            "unit": "B/op",
            "extra": "1285 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsBrief - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "1285 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroup",
            "value": 985290,
            "unit": "ns/op\t   38333 B/op\t     137 allocs/op",
            "extra": "1059 times"
          },
          {
            "name": "BenchmarkGetGroup - ns/op",
            "value": 985290,
            "unit": "ns/op",
            "extra": "1059 times"
          },
          {
            "name": "BenchmarkGetGroup - B/op",
            "value": 38333,
            "unit": "B/op",
            "extra": "1059 times"
          },
          {
            "name": "BenchmarkGetGroup - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "1059 times"
          },
          {
            "name": "BenchmarkGetGroup",
            "value": 986291,
            "unit": "ns/op\t   37890 B/op\t     137 allocs/op",
            "extra": "1152 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroup - ns/op",
            "value": 986291,
            "unit": "ns/op",
            "extra": "1152 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroup - B/op",
            "value": 37890,
            "unit": "B/op",
            "extra": "1152 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroup - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "1152 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupByPath",
            "value": 885975,
            "unit": "ns/op\t   37590 B/op\t     123 allocs/op",
            "extra": "1210 times"
          },
          {
            "name": "BenchmarkGetGroupByPath - ns/op",
            "value": 885975,
            "unit": "ns/op",
            "extra": "1210 times"
          },
          {
            "name": "BenchmarkGetGroupByPath - B/op",
            "value": 37590,
            "unit": "B/op",
            "extra": "1210 times"
          },
          {
            "name": "BenchmarkGetGroupByPath - allocs/op",
            "value": 123,
            "unit": "allocs/op",
            "extra": "1210 times"
          },
          {
            "name": "BenchmarkGetGroupByPath",
            "value": 936608,
            "unit": "ns/op\t   37241 B/op\t     123 allocs/op",
            "extra": "1196 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupByPath - ns/op",
            "value": 936608,
            "unit": "ns/op",
            "extra": "1196 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupByPath - B/op",
            "value": 37241,
            "unit": "B/op",
            "extra": "1196 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupByPath - allocs/op",
            "value": 123,
            "unit": "allocs/op",
            "extra": "1196 times\n2 procs"
          }
        ]
      }
    ]
  }
}