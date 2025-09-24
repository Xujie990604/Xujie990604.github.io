import{_ as n,c as a,o as l,ag as p}from"./chunks/framework.BDwTZuFy.js";const u=JSON.parse('{"title":"一、响应式系统","description":"","frontmatter":{},"headers":[],"relativePath":"docs/Vue/Vue设计与实现/响应式系统.md","filePath":"docs/Vue/Vue设计与实现/响应式系统.md","lastUpdated":1728721102000}'),e={name:"docs/Vue/Vue设计与实现/响应式系统.md"};function o(c,s,r,t,i,y){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="一、响应式系统" tabindex="-1">一、响应式系统 <a class="header-anchor" href="#一、响应式系统" aria-label="Permalink to &quot;一、响应式系统&quot;">​</a></h1><h2 id="一、响应式数据和副作用函数" tabindex="-1">一、响应式数据和副作用函数 <a class="header-anchor" href="#一、响应式数据和副作用函数" aria-label="Permalink to &quot;一、响应式数据和副作用函数&quot;">​</a></h2><ul><li>副作用函数：函数在正常工作任务之外对外部环境造成了影响</li><li>响应式数据：当数据发生变化时，会自动执行某些动作去更新 DOM 节点(需要明确更新 DOM 的时机，也就是说明需要拦截<code>响应式数据</code>的<code>设置</code>操作，需要明确有哪些 DOM 需要被更新，也就是说明需要拦截<code>响应式数据</code>的<code>读取</code>操作)</li><li><code>Vue2</code> 使用 <code>Object.defineProperty</code> 实现数据代理，<code>Vue3</code> 使用 <code>Proxy</code> 实现数据代理</li></ul><h2 id="二、简易的响应式系统" tabindex="-1">二、简易的响应式系统 <a class="header-anchor" href="#二、简易的响应式系统" aria-label="Permalink to &quot;二、简易的响应式系统&quot;">​</a></h2><ul><li>实现了一个简易的响应式系统，但是和 Vue3 真实的响应式系统相比仍有诸多细节未考虑。例如，分支切换、嵌套的 effect、无限递归循环</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 一、用来存储副作用函数</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#005CC5;"> subs</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> WeakMap</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 二、原始数据</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#005CC5;"> data</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  text: </span><span style="color:#032F62;">&quot;hello world&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  value: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 三、对原始数据的代理</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#005CC5;"> obj</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Proxy</span><span style="color:#24292E;">(data, {</span></span>
<span class="line"><span style="color:#6F42C1;">  get</span><span style="color:#24292E;">(</span><span style="color:#E36209;">target</span><span style="color:#24292E;">, </span><span style="color:#E36209;">key</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    // 收集副作用函数</span></span>
<span class="line"><span style="color:#6F42C1;">    track</span><span style="color:#24292E;">(target, key);</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#24292E;"> target[key];</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#6F42C1;">  set</span><span style="color:#24292E;">(</span><span style="color:#E36209;">target</span><span style="color:#24292E;">, </span><span style="color:#E36209;">key</span><span style="color:#24292E;">, </span><span style="color:#E36209;">newValue</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    target[key] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> newValue;</span></span>
<span class="line"><span style="color:#6A737D;">    // 触发副作用函数</span></span>
<span class="line"><span style="color:#6F42C1;">    trigger</span><span style="color:#24292E;">(target, key, newValue);</span></span>
<span class="line"><span style="color:#D73A49;">    return</span><span style="color:#005CC5;"> true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 收集副作用函数, 任何对象的每个属性都有一个 Set 结构用来存储副作用函数</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> track</span><span style="color:#24292E;">(</span><span style="color:#E36209;">target</span><span style="color:#24292E;">, </span><span style="color:#E36209;">key</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">activeEffect) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> target[key];</span></span>
<span class="line"><span style="color:#D73A49;">  let</span><span style="color:#24292E;"> depsMap </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> subs.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(target);</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">depsMap) {</span></span>
<span class="line"><span style="color:#24292E;">    subs.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(target, (depsMap </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Map</span><span style="color:#24292E;">()));</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#6A737D;">  // deps 中存储着所有与当前 key 相关联的副作用函数：effects</span></span>
<span class="line"><span style="color:#D73A49;">  let</span><span style="color:#24292E;"> deps </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> depsMap.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(key);</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">deps) {</span></span>
<span class="line"><span style="color:#24292E;">    depsMap.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(key, (deps </span><span style="color:#D73A49;">=</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Set</span><span style="color:#24292E;">()));</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  deps.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(activeEffect);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 触发副作用函数, 触发属性对应 Set 结构中的所有副作用函数</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> trigger</span><span style="color:#24292E;">(</span><span style="color:#E36209;">target</span><span style="color:#24292E;">, </span><span style="color:#E36209;">key</span><span style="color:#24292E;">, </span><span style="color:#E36209;">newVal</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#D73A49;">  const</span><span style="color:#005CC5;"> depsMap</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> subs.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(target);</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">depsMap) </span><span style="color:#D73A49;">return</span><span style="color:#005CC5;"> true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">  const</span><span style="color:#005CC5;"> effects</span><span style="color:#D73A49;"> =</span><span style="color:#24292E;"> depsMap.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(key);</span></span>
<span class="line"><span style="color:#6A737D;">  // 执行所有的副作用函数</span></span>
<span class="line"><span style="color:#24292E;">  effects </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> effects.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#6F42C1;"> fn</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 四、副作用函数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 全局变量用于存储被注册的副作用函数</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> activeEffect;</span></span>
<span class="line"><span style="color:#6A737D;">// effect 函数用于注册副作用函数</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> effect</span><span style="color:#24292E;">(</span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">  // 当调用 effect 注册副作用函数时，将副作用函数赋值给 activeEffect</span></span>
<span class="line"><span style="color:#6A737D;">  // 这样在收集副作用函数时，就不用硬编码函数名称了。</span></span>
<span class="line"><span style="color:#24292E;">  activeEffect </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fn;</span></span>
<span class="line"><span style="color:#6A737D;">  // 主动执行副作用函数，用来触发 get 操作</span></span>
<span class="line"><span style="color:#6F42C1;">  fn</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 五、模拟响应式数据的使用</span></span>
<span class="line"><span style="color:#6A737D;">// 注册副作用函数</span></span>
<span class="line"><span style="color:#6A737D;">// 这一步相当于在 Vue 中使用了响应式数据(1.template 2. computed 3. watch)</span></span>
<span class="line"><span style="color:#6F42C1;">effect</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  app.innerText </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> obj.text;</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">effect</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  app.style.fontSize </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> obj.size </span><span style="color:#D73A49;">+</span><span style="color:#032F62;"> &quot;px&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 六、模拟响应式数据的触发</span></span>
<span class="line"><span style="color:#6A737D;">// 修改文本</span></span>
<span class="line"><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  obj.text </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> &quot;no One&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}, </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 修改字体大小</span></span>
<span class="line"><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  obj.size </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> 30</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}, </span><span style="color:#005CC5;">2000</span><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br></div></div><h2 id="三-、调度执行" tabindex="-1">三 、调度执行 <a class="header-anchor" href="#三-、调度执行" aria-label="Permalink to &quot;三 、调度执行&quot;">​</a></h2><ul><li>调度性：当副作用函数执行时，有能力决定副作用函数执行的时机、次数、方式</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6F42C1;">effect</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // ...</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#6A737D;">  // options</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#6A737D;">    // 调度器 scheduler 是一个函数</span></span>
<span class="line"><span style="color:#6F42C1;">    scheduler</span><span style="color:#24292E;">(</span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // ...</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li>应用： nextTick 的简易模型</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 二、调度器的应用</span></span>
<span class="line"><span style="color:#6F42C1;">effect</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // ...</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#6A737D;">  // options</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#6F42C1;">    scheduler</span><span style="color:#24292E;">(</span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 将副作用函数放到 setTimeout 中，实现延迟调用</span></span>
<span class="line"><span style="color:#6F42C1;">      setTimeout</span><span style="color:#24292E;">(fn);</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ul><li>应用：连续多次修改响应式数据但只会触发一次更新的简易模型</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// 定义一个任务队列(set 结构有自动去重功能)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#005CC5;"> jobQueue</span><span style="color:#D73A49;"> =</span><span style="color:#D73A49;"> new</span><span style="color:#6F42C1;"> Set</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6A737D;">// 使用 Promise.resolve() 创建一个 promise 实例，我们用它将一个任务添加到微任务队列</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#005CC5;"> p</span><span style="color:#D73A49;"> =</span><span style="color:#005CC5;"> Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 一个标志代表是否正在刷新队列</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> isFlushing </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> flushJob</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#6A737D;">  // 如果队列正在刷新，则什么都不做</span></span>
<span class="line"><span style="color:#D73A49;">  if</span><span style="color:#24292E;"> (isFlushing) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">  // 设置为 true，代表正在刷新</span></span>
<span class="line"><span style="color:#24292E;">  isFlushing </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">  // 在微任务队列中刷新 jobQueue 队列</span></span>
<span class="line"><span style="color:#24292E;">  p.</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    jobQueue.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">job</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#6F42C1;"> job</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">  }).</span><span style="color:#6F42C1;">finally</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    // 结束后重置 isFlushing</span></span>
<span class="line"><span style="color:#24292E;">    isFlushing </span><span style="color:#D73A49;">=</span><span style="color:#005CC5;"> false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">effect</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(obj.foo);</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#6F42C1;">    scheduler</span><span style="color:#24292E;">(</span><span style="color:#E36209;">fn</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">      // 每次调度时，将副作用函数添加到 jobQueue 队列中</span></span>
<span class="line"><span style="color:#24292E;">      jobQueue.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(fn);</span></span>
<span class="line"><span style="color:#6A737D;">      // 调用 flushJob 刷新队列</span></span>
<span class="line"><span style="color:#6F42C1;">      flushJob</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="四、计算属性" tabindex="-1">四、计算属性 <a class="header-anchor" href="#四、计算属性" aria-label="Permalink to &quot;四、计算属性&quot;">​</a></h2><ul><li>计算属性会对上一次的计算结果进行缓存，只有当<code>计算属性依赖的数据发生变化</code>时才会重新计算，否则会直接返回缓存的结果</li><li>dirty: 标识是否需要重新计算，初始值为 true, 依赖项发生变化时会重新赋值为 true</li></ul><h2 id="五、watch-的实现原理" tabindex="-1">五、watch 的实现原理 <a class="header-anchor" href="#五、watch-的实现原理" aria-label="Permalink to &quot;五、watch 的实现原理&quot;">​</a></h2><ul><li>其本质就是观测一个响应式数据，当数据发生变化时通知并执行相应的回调函数</li><li>实际上 watch 就是上面提到的 effect(副作用函数) 和 scheduler(调度器)</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// watch 函数接收两个参数，source 是响应式数据，cb 是回调函数</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#6F42C1;"> watch</span><span style="color:#24292E;">(</span><span style="color:#E36209;">source</span><span style="color:#24292E;">, </span><span style="color:#E36209;">cb</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6F42C1;">  effect</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#6A737D;">    // 触发读取操作，从而建立联系</span></span>
<span class="line"><span style="color:#24292E;">    () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> source.foo,</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#6F42C1;">      scheduler</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#6A737D;">        // 当数据变化时，调用回调函数 cb</span></span>
<span class="line"><span style="color:#6F42C1;">        cb</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  );</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="六、ref-和-reactive" tabindex="-1">六、ref 和 reactive <a class="header-anchor" href="#六、ref-和-reactive" aria-label="Permalink to &quot;六、ref 和 reactive&quot;">​</a></h2><p>TODO： Vue3 响应式 API(ref reactive) 的介绍，以及最佳实践</p><h2 id="七、watch-的应用" tabindex="-1">七、watch 的应用 <a class="header-anchor" href="#七、watch-的应用" aria-label="Permalink to &quot;七、watch 的应用&quot;">​</a></h2><p>TODO：$watch 是 Vue 响应式的基础吗？ TODO：computed 是 watch + ref 的语法糖吗</p>`,22)]))}const m=n(e,[["render",o]]);export{u as __pageData,m as default};
