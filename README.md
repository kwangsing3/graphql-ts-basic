# graphcql-ts-basic

基於 GraphcQL 的設計介面，與 MongoDB 互動的 Typescript web Server 範例專案。

[Youtube: Create A GraphQL API with Apollo Server V3 and MongoDB Atlas](https://youtu.be/uPxo9NQLVMI)

IDE: visual code

```
  "devDependencies": {
    "@types/node": "^14.11.2",
    "gts": "^3.1.1",
    "ts-node": "^10.9.1",
    "typescript": "~4.7.0"
  },
  "dependencies": {
    "@apollo/server": "^4.3.1",
    "graphql": "^16.6.0",
    "mongoose": "^6.8.4",
    "nodeman": "^1.1.2"
  }
```

# 範例實現的介面

此範例專案實現幾個主要的 GraphQL 介面特性 :

- 查詢 method (getSample)
- 新增 method (createSample)
- 修改 method (editSample)
- 刪除 method (deleteSample)

# Screenshot

```url
http://localhost:4000/
```

- GraphQL 介面
  ![alt text](doc/2023-01-23%20144205.jpg)

- Query 查詢範例
  ![alt text](doc/2023-01-23%20144734.jpg)

# 作者聲明 Statement

此專案是一個基於 TypeScript、MongoDB、GraphQL 的範例專案，

```
Copyright (C) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.


THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

此專案的建立目的主要用於

- 教學、範例
- 快速建置可立即部屬使用的 GraphQL Server

任何獲取此專案源碼的衍伸項目皆可以使用於任何包含但不限於 "商業" 、 "個人" 、 "教學使用"，如此專案的衍伸項目涉及觸犯相關國家的法律或規範，作者及相關貢獻者皆無須承擔相關的法律責任。
