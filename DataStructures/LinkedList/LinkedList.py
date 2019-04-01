# класс Node для определения элемента списка
class Node:
    def __init__(self, value=None, next=None):
        self.value = value
        self.next = next


class LinkedList:
    def __init__(self):
        self.first = None
        self.last = None
        self.length = 0

    def __str__(self):
        if self.first != None:
            current = self.first
            out = 'LinkedList [\n' + str(current.value) + '\n'
            while current.next != None:
                current = current.next
                out += str(current.value) + '\n'
            return out + ']'
        return 'LinkedList []'

    def clear(self):
        self.__init__()


# Добавление элементов в конец списка.
def add(self, x):
    self.length += 1
    if self.first == None:
            # self.first и self.last будут указывать на одну область памяти
        self.last = self.first = Node(x, None)
    else:
        # здесь, уже на разные, т.к. произошло присваивание
        self.last.next = self.last = Node(x, None)

 # вставка эл-тa в начало списка


def push(self, x):
    self.length += 1
    if self.first == None:
        self.last = self.first = Node(x, None)
    else:
        self.first = Node(x, self.first)


# Вставка в любое место
def InsertNth(self, i, x):
    if self.first == None:
        self.last = self.first = Node(x, None)
        return
    if i == 0:
        self.first = Node(x, self.first)
        return
    curr = self.first
    count = 0
    while curr != None:
        count += 1
        if count == i:
            curr.next = Node(x, curr.next)
            if curr.next.next == None:
                self.last = curr.next
            break
        curr = curr.next


def len(self):
        length =0
        if self.first != None:
            current = self.first
            while current.next != None:
                current = current.next
                length +=1
        return length+1#+1 для учета self.first

#Удаление головного элемента
def Del(self,i):
        if (self.first == None):
          return
        curr = self.first
        count = 0
        if i == 0:
          self.first = self.first.next
          return
        while curr != None:
            if count == i:
              if curr.next == None:
                self.last = curr
              break
            old = curr  
            curr = curr.next
            count += 1

#Вставка элемента в отсортированный список
def SortedInsert(self,x):
        if self.first == None:
          self.first = Node(x,self.last)
          return
        if self.first.value > x:
          self.first = Node(x,self.first)
          return
        curr = self.first
        while curr != None:
            if curr.value > x:
              return
            old = curr
            curr = curr.next       
        self.last = old.next = Node(x,None)

#Удаление повторяющихся значений
def RemoveDuplicates(self):
        if (self.first == None):
            return
        old=curr = self.first
        while curr != None:
            if curr.next != None:
                if old.value == curr.next.value:
                    curr.next = curr.next.next
            else:
                old=curr = old.next
            curr=curr.next

def RemoveSortedDuplicates(self):
        if (self.first == None):
            return
        curr = self.first
        while curr != None:
            _del = 0 
            if curr.next != None:
                if curr.value == curr.next.value:
                    curr.next = curr.next.next
                    _del = 1
            if _del == 0:
                curr = curr.next
