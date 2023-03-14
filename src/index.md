---
title:  C# code reference in 11ty
description: Referencing C# code in 11ty
categories: dotnet
date: 2022-12-19
tags:
  - C# 
  - .NET 
image: /assets/img/dotnet-bot_scene_juggling-small.png
---

title={{ title | json }}
description={{ description | json }}
tags={{ tags | json }}

```csharp
{% remote_include '/master/samples/Tutorials/CSharpIntermediate/CSharpIntermediate/CSharpIntermediate.Game/07_Animation/AnimationBasics.cs' %}
```
