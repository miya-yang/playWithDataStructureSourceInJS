# Play With Data Structure Source In JS

《大话数据结构》一书代码实现 JavaScript 描述

## 第 3 章 线性表

### 3.1 开场白

### 3.2 线性表的定义

- 线性表（List）：零个或多个数据元素的有限序列。
- 线性表元素的个数 n（n >= 0）定义为线性表的长度，当 n = 0 时，称为空表。
- 在较复杂的线性表中，一个数据元素可以由若干个数据项组成。

### 3.3 线性表的抽象数据类型

### 3.4 线性表的顺序存储结构

- 线性表的顺序存储结构，指的是用一段地址连续的存储单元依次存储线性表的数据元素。
- 可以使用一维数组来实现顺序存储结构。
- 存储器中的每个存储单元都有自己的编号，这个编号称为地址。
- 存储时间性能为 O(1)，我们通常把具有这一特点的存储结构称为随机存储结构。

### 3.5 顺序存储结构的插入与删除

- 线性表的顺序存储结构，比较适合元素个数不太变化，而更多是存取数据的应用。
- 线性表的顺序存储结构优点：1. 无须为表示表中元素之间的逻辑关系而增加额外的存储空间。2. 可以快速地存取表中任一位置的元素。
- 线性表的顺序存储结构缺点：1. 插入和删除操作需要移动大量元素。 2. 当线性表长度变化较大时，难以确定存储空间的容量。 3. 造成存储空间的“碎片”。

### 3.6 线性表的链式存储结构

- 线性表的链式存储结构的特点是用一组任意的存储单元存储线性表的数据元素，这组存储单元可以是连续的，也可以是不连续的。这就意味着，这些数据元素可以存在内存未被占用的任意位置。
- 链式结构中，除了要存数据元素信息外，还要存储它的后继元素的存储地址。
- 把存储数据元素信息的域称为数据域，把存储直接后继位置的域称为指针域。
- 链表的每个结点中只包含一个指针域，所以叫做单链表。
- 链表中第一个结点的存储位置叫做头指针。
- 我们规定，线性链表的最后一个结点指针为“空”（通常用 NULL 或“^”符号表示）。
- 在单链表的第一个结点前附设一个结点，称为头结点。头结点的数据域可以不存储任何信息，也可以存储如线性表的长度等附加信息，头结点的指针域存储指向第一个结点的指针。
- 结点由存放数据元素的数据域和存放后继结点地址的指针域组成。

### 3.7 单链表的读取

### 3.8 单链表的插入与删除

- 对于插入或删除数据越频繁的操作，单链表的效率优势就越是明显。

### 3.9 单链表的整表创建

- 头插法：始终让新结点在第一的位置。
- 尾插法：新结点都插在终端结点的后面。

### 3.10 单链表的整表删除

### 3.11 单链表结构与顺序存储结构优缺点

- 存储分配方式：顺序存储结构用一段连续的存储单元依次存储线性表的数据元素；单链表采用链式存储结构，用一组任意的存储单元存放线性表的元素。
- 时间性能：查找：顺序存储结构 O(1)；单链表 O(n)；插入和删除：顺序存储结构需要平均移动表长一半的元素，时间为 O(n)；单链表在线出某位置的指针后，插入和删除时间仅为 O(1)。
- 空间性能：顺序存储结构需要预分配存储空间，分大了，浪费，分小了易发生上溢；单链表不需要分配存储空间，只要有就可以分配，元素个数也不受限制。
- 若线性表需要频繁查找，很少进行插入和删除操作时，宜采用顺序存储结构。若需要频繁插入和删除时，宜采用单链表结构。
- 当线性表中的元素个数变化较大或者根本不知道有多大时，最好用单链表结构，这样可以不需要考虑存储空间的大小问题。如果事先知道线性表的大致长度，用顺序存储结构效率会高很多。

### 3.12 静态链表

- 用数组描述的链表叫做静态链表，这种描述方法还有起名叫做游标实现法。
- 我们通常把未被使用的数组元素称为备用链表。数组的第一个元素，即下标为 0 的元素的 cur 存放备用链表的第一个结点的下标；数组的最后一个元素的 cur 存放第一个有数值的元素的下标，相当于单链表中的头结点作用。
- 静态链表的优点：在插入和删除操作时，只需要修改游标，不需要移动元素，从而改进了在顺序存储结构中的插入和删除操作需要移动大量元素的缺点
- 静态链表的缺点：1. 没有解决连续存储分配带来的表长难以确定的问题。 2. 失去了顺序存储结构随机存储的特性。

### 3.13 循环链表

- 将单链表中终端结点的指针端由空指针改为指向头结点，就使整个单链表形成一个环，这种头尾相接的单链表称为单循环链表，简称循环链表。
- 循环链表和单链表的主要差异就在于循环的判断条件上，原来是判断 p->next 是否为空，现在则是 p->next 不等于头结点，则循环未结束。
- 终端结点用尾指针 rear 指示，则查找终端结点是 O(1)，而开始结点，其实就是 rear->next->next，其时间复杂度也为 O(1)。

### 3.14 双向链表

- 双向链表是在单链表的每个结点中，再设置一个指向其前驱结点的指针域。
- 双向链表的插入方法，我们要注意顺序：先搞定即将插入的 s 的前驱和后继，再搞定后结点的前驱，最后解决前结点的后继。

### 3.15 总结回顾

### 3.16 结尾语

## 第 4 章 栈与队列

### 4.1 开场白

### 4.2 栈的定义

- 栈是限定仅在表尾进行插入和删除操作的线性表。
- 我们把允许插入和删除的一端称为栈顶（top），另一端称为栈底（bottom），不含任何数据元素的栈称为空栈。栈又称为后进先出（Last In First Out）的线性表，简称 LIFO 结构。
- 栈是一种特殊的线性表。
- 栈的插入操作，叫做进栈，也称压栈、入栈。
- 栈的删除操作，叫做出栈，也有的叫做弹栈。

### 4.3 栈的抽象数据类型

### 4.4 栈的顺序存储结构及变化

- 栈的顺序存储结构，入栈和出栈操作的时间复杂度均是 O(1)。

### 4.5 两栈共享空间

- 两个栈有两个栈底，让一个栈的栈底为数组的始端，即下标为 0 处，另一个栈为数组的末端，即下标为数组长度 n-1 处。这样，两个栈如果增加元素，就是两端点向中间延伸。
- 栈满的情况，两个指针之间相差 1 时，即 top1 + 1 === top2 为栈满。
- 使用这样的数据结构，通常都是当两个栈的空间需求有相反关系时，也就是一个栈增长时另一个栈在缩短的情况。
- 共享栈只是针对两个具有相同数据类型的栈的一个设计上的技巧，如果是不相同数据类型的栈，这种办法反而会让问题变得更复杂。

### 4.6 栈的链式存储结构及实现

- 栈的链式存储结构，简称为链栈。
- 通常对于链栈来说，是不需要头部结点的。
- 对于链栈来说，基本不存在栈满的情况，除非内存已经没有可以使用的空间。
- 最好的办法是把栈顶放在单链表的头部。
- 链栈的进栈和出栈操作时间复杂度均为 O(1)。
- 对比一下顺序栈和链栈，时间复杂度是相同的，均为 O(1)；空间复杂度：顺序栈需要实现确定一个固定的长度，可能会在内存空间浪费，但优势是存取时定位方便，而链栈则要求每个元素都有指针域，同时增加了一定的内存开销，但对于栈的长度无限制。如果使用过程中元素变化不可预料，有时很小，有时很大，那么最好是用链栈，反之，如果它的变化在可控范围内，建议使用顺序栈会比较好。

### 4.7 栈的作用

### 4.8 栈的应用——递归

- 递归函数：把一个直接调用自己或通过一系列的调用语句间接地调用自己的函数，称做递归函数。
- 每个递归定义必须至少有一个条件，满足时递归不再进行，即不再引用自身而是返回值退出。
- 大量的递归调用会建立函数的副本，会耗费大量的时间和内存。

### 4.9 栈的应用——四则运算表达式求值

- 逆波兰表示法（后缀表示法）：一种不需要括号的后缀表达法。
- 如“9 + ( 3 - 1 ) \* 3 + 10 / 2”使用后缀表示法表示为“9 3 1 - 3 \* + 10 2 / +”，这样的表达式称为后缀表达式。即所有的符号都是在要运算数字的后面出现。
- 我们把平时所用的标准四则运算表达式叫做中缀表达式。
- 后缀表达式计算规则：从左到右遍历表达式的每个数字和符号，遇到是数字就进栈，遇到是符号，就将处于栈顶两个数字出栈，进行运算，运算结果进栈，一直到最终获得结果。
- 中缀表达式转后缀表达式规则：从左到右遍历中缀表达式的每个数字和符号，若是数字就输出，即成为后缀表达式的一部分；若是符号，则判断其与栈顶符号的优先级，是右括号或优先级不高于栈顶符号（乘除优先加减）则栈顶元素依次出栈并输出，并将当前符号进栈，一直到最终输出后缀表达式为止。
- 让计算机具有处理我们通常的标准表达式的能力，最重要的就是两步：1. 将中缀表达式转化为后缀表达式（栈用来进出运算的符号）。 2. 将后缀表达式进行运算得出结果（栈用来进出运算的数字）。

### 4.10 队列的定义

- 队列是只允许在一端进行插入操作，而在另一端进行删除操作的线性表。
- 队列是一种先进先出（First In First Out）的线性表，简称 FIFO。允许插入的一端称为队尾，允许删除的一端称为对头。

### 4.11 队列的抽象数据类型

- 与线性表不同的是，插入数据只能在队尾进行，删除数据只能在队头进行。

### 4.12 循环队列

- 队列作为一种特殊的线性表，同样存在顺序存储和链式存储两种存储方式。
- 队列顺序存储的不足：由于队列元素的出列在队头，即下标为 0 的位置。因此，队列中的所有元素都要向前移动，以保证队列的队头不为空，此时时间复杂度为 O(n)。
- 为了避免当只有一个元素，队头和队尾重合使处理变得麻烦，所以引入两个指针，front 指针指向队头元素，rear 指针指向队尾元素的下一个位置，这样当 front 等于 rear 时，此队列不是还剩一个元素，而是空队列。
- 我们把队列的这种头尾相接的顺序存储结构称为循环队列。
- 循环队列中，我们定义当数组中还有一个空闲单元时为队列满。因为 rear 可能比 front 大，也可能比 front 小，因此我们定义队列满的条件是(rear + 1) % QueueSize === front。
- 通用的计算队列长度公式为：(rear - front + QueueSize) % QueueSize

### 4.13 队列的链式存储结构及实现

- 队列的链式存储结构，其实就是线性表的单链表，只不过它只能尾进头出而已，我们把它简称为链队列。
- 我们将队头指针指向链队列的头结点，队尾指针指向终端结点。
- 空队列时，front 和 rear 都指向头结点。
- 关于循环队列和链队列，从时间上，它们基本都是常数时间，即都为 O(1)；对于空间上来说，循环队列必须有一个固定的长度，而链队列不存在这个问题，所以在空间上，链队列更加灵活。总的来说，在可以确定队列长度最大值的情况下，建议使用循环队列，如果你无法预估队列的长度，则用链队列。

### 4.14 总结回顾

- 栈是限定仅在表尾进行插入和删除操作的线性表。
- 队列是只允许在一端进行插入操作，而在另一端进行删除操作的线性表。
- 如果是两个相同数据类型的栈，可以用数组的两端作栈底来让两个栈共享数据，可以最大化利用数组的空间。

## 第 5 章 串

### 5.1 开场白

### 5.2 串的定义

- 串是由零个或多个字符组成的有限序列，又名叫字符串。
- 串中的字符数目 n 称为串的长度。
- 零个字符的串称为空串。

### 5.3 串的比较

- 串的比较是通过组成串的字符之间的编码来进行的，而字符的编码指的是字符在对应字符集中的序号。
- 计算机常用字符是使用标准的 ASCII 编码，即 7 位二进制数表示一个字符，总共可以表示 128 个字符。后来发现一些特殊符号的出现，128 个不够用，于是扩展 ASCII 码由 8 位二进制数表示一个字符，总共可以表示 256 个字符，这满足以英语为主的语言和特殊符号。但对于其他语言文字就比较吃力，因此就有了 Unicode 编码，由 16 位的二进制数表示一个字符。为了和 ASCII 码兼容，Unicode 的前 256 个字符与 ASCII 码完全相同。
- 比较两个串是否相等，即它们的长度以及它们各个对应位置的字符都相等时，才算是相等。
- 对于两个不相等的串，给定两个串：s=a1a2...an，t=b1b2...bn，当满足以下条件之一时，s < t：1. n < m，且 ai = bi（i=1,2,...,n）。 2. 存在某个 k <= min(m, n)，使 ai = bi（i=1,2,...,k-1），ak < bk。

### 5.4 串的抽象数据类型

### 5.5 串的存储结构

- 串的存储结构有两种，顺序存储结构和链式存储结构。总的来说，链式存储结构不如顺序存储灵活，性能也不如顺序存储结构好。

### 5.6 朴素的模式匹配算法

- 子串的定位操作通常称做串的模式匹配。
- 平均时间复杂度为 O(n+m)，最好情况时间复杂度为 O(1)，最坏情况时间复杂度为 O((n-m+1)\*m)。算法相对低效。

### 5.7 KMP 模式匹配算法

- 为了避免重复遍历的情况，有一个叫做克努特-莫里斯-普拉特算法，简称 KMP 算法。
- KMP 的时间复杂度为 O(n + m)，主要根据子串长度和主串长度决定。
- KMP 算法仅当模式与主串之间存在许多“部分匹配”的情况下才能体现出其优势，否则两者差异并不明显。

### 5.8 总结回顾

### 5.9 结尾语

## 第 6 章 树

### 6.1 开场白

### 6.2 树的定义

- 树是 n(n >= 0) 个结点的有限集。n = 0 时称为空树。在任意一颗非空树中：1. 有且仅有一个特定的称为根的结点； 2. 当 n > 1 时，其余结点可分为 m(m > 0) 个互不相交的有限集 T1、T2、...、Tm，其中每一个集合本身又是一棵树，并且称为根的子树。
- 树的结点包含一个数据元素及若干指向其子树的分支。结点拥有的子树数称为结点的度。度为 0 的结点称为叶节点或终端结点，度不为 0 的结点称为非终端结点或分支结点。树的度是树内各结点的度的最大值。
- 结点的层次从根开始定义起，根为第一层，根的孩子为第二层。
- 树中结点的最大层次称为树的深度或高度。
- 如果将树中结点的各子树看成从左至右是有次序的，不能互换的，则称该树为有序树，否则称为无序树。
- 森林是 m(m >= 0)棵互不相交的树的集合。
- 对比线性表和树的结构，有很大不同：线性结构：第一个数据元素，无前驱；最后一个数据元素，无后继；中间元素，一个前驱一个后继。树结构：根节点，无双亲，唯一；叶结点，无孩子，可以多个；中间结点，一个双亲多个孩子。

### 6.3 树的抽象数据类型

### 6.4 树的存储结构

- 双亲表示法：我们假设以一组连续空间存储树的结点，同时在每个结点中，附设一个指示器指示其双亲结点在数组中的位置。结点拥有 data 和 parent，其中 data 是数据域，parent 是指针域。
- 由于根结点是没有双亲的，所以我们约定根结点的位置域设置为-1。
- 为了获取结点的孩子，我们增加一个结点最左边孩子的域，叫做长子域，这样就很容易得到结点的孩子，如果没有孩子的结点，这个长子域就设置为-1。
- 为了体现各兄弟之间的关系，可以增加一个右兄弟域来体现兄弟关系，如果结点存在右兄弟，则记录下右兄弟的下标，如果右兄弟不存在，则赋值为-1。
- 存储结构的设计是一个非常灵活的过程。一个存储结构设计得是否合理，取决于基于该存储结构的运算是否适合，是否方便，时间复杂度好不好等。
- 由于树中每个结点可能有多棵子树，可以考虑用多重链表，即每个结点有多个指针域，其中每个指针指向一棵子树的根结点，我们把这种方法叫做多重链表表示法。
- 因为树的每个结点的度，也就是孩子个数是不同的，所以可以用两种方案解决：
- 方案一：指针域的个数等于树的度。结构类似于：data、child1、child2...childn。其中 data 是数据域，child1-childn 是指针域，用来指向该结点的孩子结点。但是这个方法在各结点度相差很大时，显然会非常浪费空间，因为有很多结点的指针域是空的。因此为了节约，我们可以通过第二种方案。
- 方案二：每个结点指针域的个数等于该结点的度，我们专门取一个位置来存储结点指针域的个数。结构类似于：data、degree、child1、child2...childn。其中 degree 为度域，也就是存储该结点的孩子结点的个数，child1-childn 是指针域，指向各个孩子的结点。该方法虽然克服了浪费空间的缺点，但由于各个结点的链表是不同的结构，嘉善要维护结点的度值，因此在运算上会带来时间的损耗。
- 孩子表示法：把每个结点的孩子结点排列起来，以单链表作存储结构，则 n 个结点有 n 个孩子链表，如果是叶子结点则单链表为空，然后 n 个头指针组成一个线性表，采用顺序存储结构，存放进一个一维数组中。
- 孩子表示法要设计两种结点结构，一个是孩子链表的孩子结点：结构类似于 child、next。其中 child 是数据域，用来存储某个结点在表头数组中的下标，next 是指针域，用来存储指向某结点的下一个孩子结点的指针。另一个是表头数组的表头结点，结构类似于 data、firstchild，其中 data 是数据域，存储某结点的数据信息，firstchild 是头指针域，存储该结点的孩子链表的头指针。
- 孩子表示法对于我们要查找某个结点的某个孩子，或者某个结点的兄弟，只需要查找这个结点的孩子单链表即可，对于遍历整棵树也是很方便的，对头结点的数组循环即可。
- 我们为了知道某个结点的双亲，可以和孩子表示法一样，在数组中增加 parent，指向其双亲的下标，不存在赋值为-1。
- 兄弟孩子表示法：任意一棵树，它的结点的第一个孩子如果存在就是唯一的，它的右兄弟如果存在也是唯一的。因此，我们设置两个指针，分别指向该结点第一个孩子和此结点的右兄弟。结点结构类似于：data、firstchild、rightsib，其中 data 是数据域，firstchild 为指针域，存储该结点的第一个孩子结点的存储地址，rightsib 是指针域，存储该结点的右兄弟结点的存储地址。
- 这种方法对于查找某个结点的某个孩子带来了方便，只需要通过 firstchild 找到此结点的长子，然后再通过长子结点的 rightsib 找到其右兄弟。如果想找某个结点的双亲，可以增加一个 parent 指针域来解决。这个表示法最大的好处是把一棵复杂的树变成了一棵二叉树。
