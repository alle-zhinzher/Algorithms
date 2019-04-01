from collections import deque
q = deque()

q.append('eat')
q.append('sleep')
q.append('code')

print(q)
# deque(['eat', 'sleep', 'code'])

print(q.popleft())  # 'eat'
print(q.popleft())  # 'sleep'
print(q.popleft())  # 'code'
