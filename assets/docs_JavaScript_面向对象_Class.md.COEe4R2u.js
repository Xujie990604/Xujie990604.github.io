import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.BDwTZuFy.js";const u=JSON.parse('{"title":"Class","description":"","frontmatter":{},"headers":[],"relativePath":"docs/JavaScript/面向对象/Class.md","filePath":"docs/JavaScript/面向对象/Class.md","lastUpdated":1748684767000}'),e={name:"docs/JavaScript/面向对象/Class.md"};function o(r,s,c,t,i,b){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="class" tabindex="-1">Class <a class="header-anchor" href="#class" aria-label="Permalink to &quot;Class&quot;">​</a></h1><h2 id="一、类的基本使用" tabindex="-1">一、类的基本使用 <a class="header-anchor" href="#一、类的基本使用" aria-label="Permalink to &quot;一、类的基本使用&quot;">​</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Point</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // 最好是需要用到哪些变量时提前声明一下</span></span>
<span class="line"><span style="color:#6A737D;">  // 这种普通的变量是定义在 new 生成的实例上的</span></span>
<span class="line"><span style="color:#E36209;">  a</span><span style="color:#D73A49;"> =</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#E36209;">  b</span><span style="color:#D73A49;"> =</span><span style="color:#005CC5;"> 2</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // constructor 方法是类中的默认方法</span></span>
<span class="line"><span style="color:#6A737D;">  // constructor 方法的返回值默认是 this 对象</span></span>
<span class="line"><span style="color:#D73A49;">  constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">x</span><span style="color:#24292E;">, </span><span style="color:#E36209;">y</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> x;</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.b </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> y;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 类的所有方法都是定义在 prototype 属性上</span></span>
<span class="line"><span style="color:#6A737D;">  // 用类的实例调用方法，其实就是调用 prototype 上的方法</span></span>
<span class="line"><span style="color:#6F42C1;">  toString</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#032F62;"> \`\${</span><span style="color:#005CC5;">this</span><span style="color:#032F62;">.</span><span style="color:#24292E;">a</span><span style="color:#032F62;">} + \${</span><span style="color:#005CC5;">this</span><span style="color:#032F62;">.</span><span style="color:#24292E;">b</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // set/get 访问器</span></span>
<span class="line"><span style="color:#6A737D;">  // 没有额外逻辑的 get/set 在 JavaScript 中很少使用。如果不需要再 get/set 期间添加其他逻辑，则可以公开公共字段</span></span>
<span class="line"><span style="color:#6A737D;">  // 调用的时候像属性一样 Point.length = 6</span></span>
<span class="line"><span style="color:#D73A49;">  set</span><span style="color:#6F42C1;"> length</span><span style="color:#24292E;">(</span><span style="color:#E36209;">a</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#005CC5;">    this</span><span style="color:#24292E;">.a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> a;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 调用的时候像属性一样 Point.length</span></span>
<span class="line"><span style="color:#D73A49;">  get</span><span style="color:#6F42C1;"> length</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.a.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 属性前面加上 static 关键字代表这是一个静态属性</span></span>
<span class="line"><span style="color:#6A737D;">  // 静态属性不会存在于通过 new 生成的实例中</span></span>
<span class="line"><span style="color:#6A737D;">  // 静态属性可以通过类直接调用，或者是被静态方法调用</span></span>
<span class="line"><span style="color:#D73A49;">  static</span><span style="color:#E36209;"> prop</span><span style="color:#D73A49;"> =</span><span style="color:#005CC5;"> 1</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 方法前面加上 static 关键字代表这是一个静态方法</span></span>
<span class="line"><span style="color:#6A737D;">  // 静态方法：只能通过类调用，不能通过类的实例调用</span></span>
<span class="line"><span style="color:#6A737D;">  // 静态方法中如果使用了 this 关键字，this 代表类本身，而不是实例(也就是通过 this 可以来调用静态属性)</span></span>
<span class="line"><span style="color:#D73A49;">  static</span><span style="color:#6F42C1;"> add</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#005CC5;"> this</span><span style="color:#24292E;">.prop;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 私有属性：只能在类的内部使用，在类的外部使用会报错</span></span>
<span class="line"><span style="color:#6A737D;">  // 私有属性会存在于 new 生成的实例中，就是不可以被调用</span></span>
<span class="line"><span style="color:#E36209;">  #a</span><span style="color:#D73A49;"> =</span><span style="color:#032F62;"> &quot;xujie&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 私有方法: 只能在类的内部调用，在类的外部调用会报错</span></span>
<span class="line"><span style="color:#6A737D;">  // 因为私有属性和方法存在于实例中，所以不可以在 static 方法中调用</span></span>
<span class="line"><span style="color:#24292E;">  #</span><span style="color:#6F42C1;">delete</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#032F62;"> &quot;delete&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 类在调用时必须使用 new 操作符，使用 () 把类当做函数调用会报错</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#005CC5;"> p</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Point</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">typeof</span><span style="color:#24292E;"> Point; </span><span style="color:#6A737D;">// &quot;function&quot;, Class 实际上只是一个语法糖，Point 类本质还是一个函数</span></span>
<span class="line"><span style="color:#24292E;">Point </span><span style="color:#D73A49;">===</span><span style="color:#005CC5;"> Point</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">constructor</span><span style="color:#24292E;">;    </span><span style="color:#6A737D;">// true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div><h2 id="二、类的继承" tabindex="-1">二、类的继承 <a class="header-anchor" href="#二、类的继承" aria-label="Permalink to &quot;二、类的继承&quot;">​</a></h2><ul><li>父类的静态属性和方法会被子类继承</li><li>父类的私有属性和方法不会被子类继承(其实私有属性还会在子类 new 出来的实例中存在，只不过是不能用)(私有属性只能在定义它的类中使用)</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Foo</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">  constructor</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">  size</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用extend关键字实现继承</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#6F42C1;"> Bar</span><span style="color:#D73A49;"> extends</span><span style="color:#6F42C1;"> Foo</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#D73A49;">  constructor</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#6A737D;">    // 在子类的 constructor 中必须先调用一次 super() 之后才能使用 this 关键字</span></span>
<span class="line"><span style="color:#6A737D;">    // super() 函数就是在调用父类的构造函数，生成一个父类的实例对象，这个实例对象拥有父类上的属方法</span></span>
<span class="line"><span style="color:#6A737D;">    // 然后将这个实例对象当做子类的 this。子类在这个对象上进行属性和方法的添加，这样来实现子类例既有父类的方法属性又有自身的方法属性</span></span>
<span class="line"><span style="color:#005CC5;">    super</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // 父类和子类都有方法 size 时，子类的方法会重写父类的方法实现(重写也就是覆盖)</span></span>
<span class="line"><span style="color:#6A737D;">  // 但是可以通过 super.size() 的方式实现，调用子类方法时先执行一遍父类的方法</span></span>
<span class="line"><span style="color:#6F42C1;">  size</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#005CC5;">    super</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#005CC5;"> bar</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Bar</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 控制台会打印 1 2 因为子类实例构建的同时，会调用super()执行一次父类的构造</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div>`,6)]))}const m=n(e,[["render",o]]);export{u as __pageData,m as default};
